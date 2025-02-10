<script setup lang="ts">
interface UserInfo {
  email: string
  password: string
  password_confirmation: string
}

interface Props {
  buttonText: string
  hasName?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  register: [userInfo: UserInfo]
}>()

const error = ref(false)
const showPassword = ref(false)
const showPasswordConfirmation = ref(false)
const userInfo = ref<UserInfo>({
  email: '',
  password: '',
  password_confirmation: '',
})

async function handleSubmit() {
  try {
    emit('register', userInfo.value)
  }
  catch {
    error.value = true
  }
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
            class="pl-2 outline-none border-none w-full"
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
                class="pl-2 outline-none border-none w-full"
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
                class="size-6"
              />
            </span>
          </div>
        </div>
      </div>

      <div class="w-full">
        <label for="password_confirmation" class="block text-gray-800 font-bold mb-2">
          Reingresar contraseña
        </label>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl w-full">
          <div class="relative w-full items-center">
            <div class="flex items-center">
              <Icon name="lucide:lock" class="h-5 w-5 text-gray-400" />
              <input
                id="password_confirmation"
                v-model="userInfo.password_confirmation"
                class="pl-2 outline-none border-none w-full"
                :type="showPasswordConfirmation ? 'text' : 'password'"
                placeholder="Reingresar contraseña"
                required
              >
            </div>
            <span
              class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
              @click="showPasswordConfirmation = !showPasswordConfirmation"
            >
              <Icon
                :name="showPasswordConfirmation ? 'ph:eye-bold' : 'ph:eye-closed-bold'"
                class="size-6"
              />
            </span>
          </div>
        </div>
        <div class="mt-2">
          <p class="px-8 text-center text-xs">
            ¿Ya tienes una Cuenta?
            <RouterLink to="/login" class="hover:underline underline-offset-4 hover:text-primary">
              Conectarse
            </RouterLink>
          </p>
        </div>
      </div>

      <p
        v-if="error"
        class="text-red-500 text-sm"
      >
        Hubo un error al introducir el email o la contraseña.
      </p>

      <button
        type="submit"
        class="block w-full mt-4 py-2 rounded-xl font-semibold mb-2 bg-black px-8 text-white cursor-pointer"
      >
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>
