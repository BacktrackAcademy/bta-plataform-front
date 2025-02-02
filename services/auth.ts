import { useFetch, useRuntimeConfig } from '#app'

export async function login(email, password) {
  const config = useRuntimeConfig()
  const apiUrl = `${config.public.apiBaseUrl}/tokens`
  const { data, error } = await useFetch(apiUrl, {
    method: 'POST',
    body: { user: { email, password } },
  })

  if (error?.value) {
    throw new Error(error.value.message || 'Login failed')
  }

  return data.value
}

export async function logout(token) {
  const { data, error } = await useFetch(`/api/v1/tokens/${token}`, {
    method: 'DELETE',
  })

  if (error?.value) {
    throw new Error(error.value.message || 'Logout failed')
  }

  return data.value
}
