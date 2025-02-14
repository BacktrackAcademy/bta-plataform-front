<script setup lang="ts">
definePageMeta({
  auth: false,
})

interface RegistrationInfo {
  email: string
  password: string
  password_confirmation: string
}

const error = ref<string | null>(null)
const config = useRuntimeConfig()

async function handleRegister(registrationInfo: RegistrationInfo) {
  try {
    const response = await $fetch(`${config.public.apiBaseUrl}/users`, {
      method: 'POST',
      body: {
        user: registrationInfo,
      },
    })
  }
  catch (e: any) {
    console.log(e)

    if (e?.response?.status === 409) {
      error.value = e.response._data || 'El usuario ya existe'
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

          <AuthUserRegisterForm
            button-text="Registrarme"
            @register="handleRegister"
          />
          <p v-if="error" class="text-red-500 text-sm mb-4 px-4 py-2 bg-red-50 border border-red-500 rounded-lg">
            {{ error }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
