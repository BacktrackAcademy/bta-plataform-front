import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
  secret: 'YOUR_SECRET_HERE',

  pages: {
    signIn: '/login',
  },

  providers: [
    // @ts-expect-error
    CredentialsProvider.default({
      name: 'credentials',
      credentials: {},
      async authorize(credentials: { username: string, password: string }) {
        // TODO: Fetch user from database
        console.log(credentials)
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token = {
          ...token,
          ...user,
        }
      }

      return token
    },

    async session({ session, token }) {
      session.user = {
        ...token,
        ...session.user,
      }

      return session
    },
  },
})
