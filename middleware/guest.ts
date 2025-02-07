export default defineNuxtRouteMiddleware((_to, _from) => {
  const { status } = useAuth()

  if (status.value === 'authenticated') {
    return navigateTo({
      name: 'dashboard',
    })
  }
})
