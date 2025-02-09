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
    origin: process.env.NUXT_AUTH_ORIGIN,
    basePath: '/api/v1', // 🔥 Cambiado de `/api/auth` a `/api/v1`
    enableSessionStorage: true, // ✅ Habilita almacenamiento de sesión
    cookies: {
      secure: true, // ✅ Usa cookies seguras en producción
      sameSite: 'none', // ✅ Permite cookies entre dominios
      httpOnly: true, // ✅ Solo accesible por el backend
    },
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
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
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

  nitro: {
    preset: 'static', // 🔥 Esto cambia el build para generar solo archivos estáticos
    prerender: {
      failOnError: false, // No detiene la compilación si hay errores en prerender
      ignore: ['/cursos', '/noticias', '/debates'], // Ignorar rutas problemáticas
    },
  },
})
