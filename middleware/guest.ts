export default defineNuxtRouteMiddleware(() => {
  const authToken = useCookie('auth_token').value

  if (authToken) {
    return navigateTo('/dashboard') // Redirigir si ya está autenticado
  }
})
