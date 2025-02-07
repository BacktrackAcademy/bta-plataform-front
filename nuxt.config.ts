// https://nuxt.com/docs/api/configuration/nuxt-config
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
    baseURL: process.env.NUXT_PUBLIC_API_BASE_URL,
    provider: {
      type: 'authjs',
    },
  },
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

  nitro: {
    preset: 'static', // 🔥 Esto cambia el build para generar solo archivos estáticos
    prerender: {
      failOnError: false, // No detiene la compilación si hay errores en prerender
      ignore: ['/cursos', '/noticias', '/debates'], // Ignorar rutas problemáticas
    },
  },
})
