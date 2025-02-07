export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const { data: session } = useAuth() // Obtener la sesión de Sidebase Auth

  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    onRequest({ options }) {
      if (session.value?.user?.token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${session.value.user.token}`,
        }
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
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
