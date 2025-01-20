<script setup lang="ts">
// auth: false,
// middleware: 'auth',

interface RegistrationInfo {
  email: string
  password: string
  password_confirmation: string
  // Agrega otros campos necesarios según el formulario
}

const error = ref<string | null>(null)
const router = useRouter()
const { $auth } = useNuxtApp()

// Redireccionar si el usuario ya está autenticado
onMounted(() => {
  if ($auth?.loggedIn) {
    router.push('/cursos')
  }
})

async function handleRegister(registrationInfo: RegistrationInfo) {
  try {
    const { data } = await useFetch('/api/v1/users', {
      method: 'POST',
      body: {
        user: registrationInfo,
      },
    })

    if (data.value) {
      await router.push('/login')
    }
  }
  catch (e: any) {
    if (e?.response?.status === 409) {
      error.value = e.response.data
    }
    else {
      error.value = 'Hubo un error, por favor confirme que ambas contraseñas coincidan y tengan más de 8 dígitos'
    }
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
          <h1 class="text-gray-800 font-bold text-2xl mb-1">
            Regístrate en Backtrack academy
          </h1>
          <p class="text-sm font-normal text-gray-600 mb-7">
            Únete <b>gratis</b> y comienza a aprender desde cero con los mejores <b>hackers.</b>
          </p>
          <p v-if="error" class="text-red-500">
            {{ error }}
          </p>
          <AuthUserRegisterForm
            button-text="Registrarme"
            @register="handleRegister"
          />
        </div>
      </div>
    </div>
  </div>
</template>
