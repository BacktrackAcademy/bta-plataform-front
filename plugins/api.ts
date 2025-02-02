export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const token = useCookie('auth_token')

  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    onRequest({ options }) {
      if (token.value) {
        options.headers.set('Authorization', `Bearer ${token.value}`)
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        token.value = null
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
