import type { UseFetchOptions } from '#app'

export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  })
}
