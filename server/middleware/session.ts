export default defineEventHandler((event) => {
  // Permitir acceso directo a la ruta de sesión
  if (event.path === '/api/auth/session') {
    setHeader(event, 'Cache-Control', 'no-store, no-cache, must-revalidate')
  }
})
