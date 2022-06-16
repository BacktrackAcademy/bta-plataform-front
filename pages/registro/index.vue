<template>
  <div class="h-full w-full">
    <div class="h-screen flex">
      <div class="flex w-1/2 bg-bta-blue justify-around items-center">
        <div>
          <h1 class="text-white font-bold text-4xl font-oswald uppercase">Happy Hacking</h1>
          <p class="text-white mt-1">Comienza tu carrera en Ciberseguridad</p>
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Regístrate en Backtrack academy</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Únete <b>gratis</b> y comienza a aprender desde cero con los mejores <b>hackers.</b></p>
          <UserRegisterForm buttonText="Registrarme" :submitForm="registerUser"/>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import UserRegisterForm from "@/components/auth/UserRegisterForm"

export default {
  auth: false,
  middleware: "auth",
  name: "Registro",
  data() {
    return {}
  },
  beforeCreate() {
    if (this.$auth.loggedIn) {
      this.$router.push('/cursos')
    }
  },
  components: {
    UserRegisterForm,
  },
  methods: {
    async registerUser(registrationInfo) {
      await this.$axios.post("/users", {
        user: registrationInfo
      })
      // let response = this.$auth.loginWith("local", {
      //   data: { registrationInfo }
      // })
      // console.log("response", response)
      // this.$router.push('/login')
    }
  }
}
</script>