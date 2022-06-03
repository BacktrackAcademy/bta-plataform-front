<template>
  <div class="mobile:w-72 table:w-96 min-w-max">
    <form
      action
      class="flex flex-col justify-center items-center rounded-lg gap-4 mobile:p-5 table:p-10"
      @submit.prevent="submitForm(userInfo)"
    >
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input
          class="pl-2 outline-none border-none"
          v-model="userInfo.email"
          type="email"
          placeholder="Email"
          required
        >
      </div>

      <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
        <input
          class="pl-2 outline-none border-none"
          v-model="userInfo.password"
          type="password"
          placeholder="Password"
          required
        >
      </div>
      <p v-if="error">Hubo un error al introducir el email o la contraseña.</p>
      <input
        class="block w-full mt-4 py-2 rounded-xl font-semibold mb-2 bg-black px-8 py-2 text-white cursor-pointer"
        type="submit"
        :value="buttonText"
      >
    </form>
  </div>
</template>

<script>
  export default {
    name: "UserAuthForm",
    data() {
      return {
        userInfo: {
          // email: "gonzaloggdlr@gmail.com",
          email: "felipe@backtrackacademy.com",
          password: "demo321#",
        },
        error: false,
      }
    },
    props: [
      "buttonText",
      "submitForm",
      "hasName"
    ],
    methods: {}
  }
</script>