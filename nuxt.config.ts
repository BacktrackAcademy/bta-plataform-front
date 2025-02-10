// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-01-18',

  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
  auth: {
    isEnabled: true,
    disableServerSideAuth: true,
    originEnvKey: 'NUXT_AUTH_ORIGIN',
    baseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    origin: process.env.NUXT_AUTH_ORIGIN || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
    basePath: '/api/auth',
    enableSessionStorage: true,
    enableGlobalAppMiddleware: true,
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
    cookies: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none',
      httpOnly: true,
    },
    provider: {
      type: 'authjs',
    },
    globalMiddleware: false,
    session: {
      enableSessionRefresh: true,
      strategies: {
        session: {
          endpoints: {
            session: '/api/auth/session',
          },
        },
      },
    },
    defaultProvider: 'credentials',
    baseURL: process.env.NUXT_PUBLIC_API_BASE_URL,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_AUTH_ORIGIN,
      authCookieName: process.env.NUXT_PUBLIC_AUTH_COOKIE_NAME,
      authTokenName: process.env.NUXT_PUBLIC_AUTH_TOKEN_NAME,
      // web3forms_access_key: '',
    },
  },

  experimental: {
    typedPages: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
