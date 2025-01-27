// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('auth_token').value
  console.log('Token:', token)
  if (!token) {
    return navigateTo('/login') // Redirige a login si no hay token
  }
})
