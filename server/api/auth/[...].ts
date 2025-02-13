import process from 'node:process'
import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import LinkedInProvider from 'next-auth/providers/linkedin'

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

          if (!response.ok) {
            console.error('Auth failed:', response.status, await response.text())
            throw new Error('Invalid credentials')
          }

          const data = await response.json()
          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            opportunities: data.user.opportunities,
            token: data.token,
          }
        }
        catch (error) {
          console.error('Authentication error:', error)
          throw new Error('Server error')
        }
      },
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR
    GithubProvider.default({
      clientId: process.env.NUXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NUXT_PUBLIC_GITHUB_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR
    LinkedInProvider.default({
      clientId: process.env.NUXT_PUBLIC_LINKEDIN_KEY,
      clientSecret: process.env.NUXT_PUBLIC_LINKEDIN_SECRET,
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
