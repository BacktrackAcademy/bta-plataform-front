import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
  // Replace the weak default secret with a strong environment variable
  secret: 'secret',
  pages: {
    signIn: '/login',
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR
    CredentialsProvider.default({
      name: 'credentials',
      credentials: {},
      async authorize(credentials: { email: string, password: string }) {
        try {
          const response = await fetch(`${process.env.NUXT_PUBLIC_API_BASE_URL}/tokens`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(credentials),
          })
          if (response.ok) {
            const data = await response.json()
            return {
              id: data.user.id,
              name: data.user.name,
              email: data.user.email,
              token: data.token,
            }
          }
        }
        catch (error) {
          console.error('Authentication error:', error)
          return null
        }
      },
    }),
  ],
  // Add session configuration if needed
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async session({ session, token }) {
      session.user = token.user
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
  },
})
