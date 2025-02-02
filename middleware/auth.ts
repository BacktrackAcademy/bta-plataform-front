export default defineNuxtRouteMiddleware((_to, _from) => {
  const token = useCookie('auth_token').value
  if (!token) {
    return navigateTo('/login') // Redirige a login si no hay token
  }
})
