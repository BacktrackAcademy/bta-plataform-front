<script setup lang="ts">
interface Props {
  buttonText: string
}

defineProps<Props>()
const emit = defineEmits<{
  register: [userInfo: { email: string, password: string }]
  socialLogin: [provider: 'github' | 'linkedin']
}>()

const showPassword = ref(false)

const userInfo = ref({
  email: '',
  password: '',
})

function handleSubmit() {
  emit('register', userInfo.value)
}

function handleSocialLogin(provider: 'github' | 'linkedin') {
  emit('socialLogin', provider)
}
</script>

<template>
  <div class="w-full max-w-xl min-w-max">
    <form
      class="flex flex-col justify-center items-center rounded-lg gap-4"
      @submit.prevent="handleSubmit"
    >
      <div class="w-full">
        <label for="email" class="block text-gray-800 font-bold mb-2">
          Correo electrónico
        </label>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl w-full">
          <Icon name="lucide:at-sign" class="h-5 w-5 text-gray-400" />
          <input
            id="email"
            v-model="userInfo.email"
            class="pl-2 outline-none border-none w-full text-secondary"
            type="email"
            placeholder="mail@example.com"
            required
          >
        </div>
      </div>

      <div class="w-full">
        <label for="password" class="block text-gray-800 font-bold mb-2">
          Contraseña
        </label>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl w-full">
          <div class="relative w-full items-center">
            <div class="flex items-center">
              <Icon name="lucide:lock" class="h-5 w-5 text-gray-400" />
              <input
                id="password"
                v-model="userInfo.password"
                class="pl-2 outline-none border-none w-full text-secondary"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Ingresar contraseña"
                required
              >
            </div>
            <span
              class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
              @click="showPassword = !showPassword"
            >
              <Icon
                :name="showPassword ? 'ph:eye-bold' : 'ph:eye-closed-bold'"
                class="size-6 text-muted-foreground"
              />
            </span>
          </div>
        </div>
        <div class="mt-2 text-gray-500">
          <div class="text-xs justify-between flex">
            <RouterLink to="/registro" class="text-gray-500 hover:text-blue-500">
              Registrarse
            </RouterLink>
            <RouterLink to="/reenviar-email" class="text-gray-500 hover:text-blue-500">
              ¿No recibió mensaje de confirmación?
            </RouterLink>
          </div>
          <div class="text-xs my-2">
            <RouterLink to="/olvide-contrasena" class="text-gray-500 hover:text-blue-500">
              ¿Olvidaste tu contraseña?
            </RouterLink>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="block w-full mt-4 py-2 rounded-xl font-semibold mb-2 bg-black px-8 text-white cursor-pointer"
      >
        {{ buttonText }}
      </button>

      <div class="relative w-full">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-white px-2 text-muted-foreground">
            O continuar con
          </span>
        </div>
      </div>

      <div class="flex gap-4 w-full">
        <button
          type="button"
          class="flex-1 flex items-center justify-center gap-2 py-2 border rounded-xl bg-gray-50 text-secondary hover:bg-gray-100"
          @click="handleSocialLogin('github')"
        >
          <Icon name="mdi:github" class="size-5 text-black" />
          GitHub
        </button>
        <button
          type="button"
          class="flex-1 flex items-center justify-center gap-2 py-2 border rounded-xl bg-gray-50 text-secondary hover:bg-gray-100"
          @click="handleSocialLogin('linkedin')"
        >
          <Icon name="mdi:linkedin" class="size-5 text-[#0A66C2]" />
          LinkedIn
        </button>
      </div>
    </form>
  </div>
</template>
