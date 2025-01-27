// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  pages: {
    '/dashboard': { middleware: 'auth' },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:3000/api/v1',
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

  compatibilityDate: '2025-01-18',
})
