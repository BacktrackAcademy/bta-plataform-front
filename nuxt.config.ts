// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    // '@nuxtjs/robots',
    // '@nuxtjs/sitemap',
    // 'shadcn-nuxt',
    // '@nuxt/content',
    // '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/eslint',
  ],

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: '',
      // web3forms_access_key: '',
    },
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-01-18',

  eslint: {
    config: {
      standalone: false,
    },
  },
})
