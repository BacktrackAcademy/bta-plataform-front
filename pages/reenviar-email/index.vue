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

const email = ref('')
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
            ¿No recibiste un mensaje de confirmación?
          </h1>
          <div class="w-full">
            <label for="email" class="block text-gray-800 font-bold mb-2">
              Correo electrónico
            </label>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl w-full">
              <Icon name="lucide:at-sign" class="h-5 w-5 text-gray-400" />
              <input
                id="email"
                v-model="email"
                class="pl-2 outline-none border-none w-full"
                type="email"
                placeholder="mail@example.com"
                required
              >
            </div>
          </div>
          <div class="mt-2 text-gray-500">
            <div class="text-xs justify-center gap-1 flex">
              ¿Ya tienes una Cuenta?
              <RouterLink to="/login" class="text-gray-500 hover:text-blue-500">
                Conectarse
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
