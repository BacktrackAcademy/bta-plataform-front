<script setup lang="ts">
import { useCookie, useFetch, useRouter, useRuntimeConfig, useState } from '#app'
import UserAuthForm from '@/components/auth/UserAuthForm'
import { ref } from 'vue'

definePageMeta({
  layout: 'default',
  middleware: 'guest', // Evita el acceso si ya tienes sesión
})
// Estado de error
const error = ref<string | null>(null)

// Router para la redirección
const router = useRouter()

// Función para iniciar sesión
async function loginUser(loginInfo: Record<string, any>) {
  error.value = null // Resetear error antes de iniciar sesión

  try {
    // Obtener configuración de runtime
    const config = useRuntimeConfig()

    // Llamada al backend
    const { data, error: fetchError } = await useFetch(`${config.public.apiBaseUrl}/tokens`, {
      method: 'POST',
      body: loginInfo,
    })

    if (fetchError.value) {
      throw new Error(fetchError.value.message || 'Error al iniciar sesión')
    }

    const token = data.value?.token
    const user = data.value?.user

    if (token && user) {
      // Guardar token en cookies y usuario en estado global
      useCookie('auth_token').value = token
      useState('user', () => user)

      // Redirigir al dashboard
      router.push('/dashboard')
    }
    else {
      throw new Error('Respuesta inválida del servidor')
    }
  }
  catch (err: any) {
    error.value = err.message
  }
}
</script>

<template>
  <div class="h-full w-full">
    <div class="min-h-[calc(100vh-90px)] flex">
      <div class="hidden md:flex md:w-2/5 lg:w-1/2 bg-bta-blue justify-around items-center">
        <div>
          <h1 class="text-white font-bold text-4xl font-oswald uppercase">
            Happy Hacking
          </h1>
          <p class="text-white mt-1">
            Comienza tu carrera en Ciberseguridad
          </p>
        </div>
      </div>
      <div class="flex w-full md:w-3/5 lg:w-1/2 justify-center items-center bg-white p-5 lg:p-10">
        <div class="bg-white w-full lg:10/12 xl:w-9/12">
          <h1 class="text-gray-800 font-bold text-2xl mb-8">
            Inicia Sesión
          </h1>
          <p v-if="error" class="text-red-500 lg:mb-3 mb-1">
            {{ error }}
          </p>
          <UserAuthForm button-text="Iniciar sesión" @register="loginUser" />
        </div>
      </div>
    </div>
  </div>
</template>
