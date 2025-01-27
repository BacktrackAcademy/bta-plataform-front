// utils/api.js
export async function apiFetch(endpoint, options = {}) {
  const config = useRuntimeConfig()
  const token = useCookie('auth_token').value

  if (!token) {
    throw new Error('Token not available. Please log in.')
  }

  return await $fetch(endpoint, {
    baseURL: config.public.apiBaseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
    ...options,
  })
}
