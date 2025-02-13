<script setup lang="ts">
import UserAuthForm from '@/components/auth/UserAuthForm'

definePageMeta({
  layout: 'default',
  middleware: 'guest',
})

const error = ref<string | null>(null)
const router = useRouter()
const { signIn } = useAuth()

// Nueva función de login usando Nuxt Auth
async function loginUser(credentials: Record<string, any>) {
  error.value = null
  try {
    const result = await signIn('credentials', credentials)

    if (result?.error) {
      throw new Error(result.error)
    }
    // Redirigir al dashboard después de un login exitoso
    router.push('/dashboard')
  }
  catch (err: any) {
    error.value = err.message || 'Error al iniciar sesión'
  }
}

async function handleSocialLogin(provider: 'github' | 'linkedin') {
  error.value = null
  try {
    const result = await signIn(provider, {
      callbackUrl: '/dashboard',
    })

    if (result?.error) {
      throw new Error(result.error)
    }
  }
  catch (err: any) {
    error.value = err.message || `Error al iniciar sesión con ${provider}`
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
          <UserAuthForm
            button-text="Iniciar sesión"
            @register="loginUser"
            @social-login="handleSocialLogin"
          />
        </div>
      </div>
    </div>
  </div>
</template>
