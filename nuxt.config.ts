// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    // '@nuxtjs/robots',
    // '@nuxtjs/sitemap',
    // '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
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

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2025-01-18',
})
