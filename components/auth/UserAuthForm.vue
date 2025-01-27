<script setup lang="ts">
interface Props {
  buttonText: string
}

defineProps<Props>()

const emit = defineEmits<{
  register: [userInfo: { email: string, password: string }]
}>()

const userInfo = ref({
  email: '',
  password: '',
})

function handleSubmit() {
  emit('register', userInfo.value)
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
          <Icon name="lucide:lock" class="h-5 w-5 text-gray-400" />
          <input
            id="password"
            v-model="userInfo.password"
            class="pl-2 outline-none border-none w-full"
            type="password"
            placeholder="Ingresar contraseña"
            required
          >
        </div>
      </div>

      <button
        type="submit"
        class="block w-full mt-4 py-2 rounded-xl font-semibold mb-2 bg-black px-8 text-white cursor-pointer"
      >
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>
