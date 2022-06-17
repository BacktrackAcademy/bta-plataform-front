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
          <p v-if="error" class="text-red-500">{{error}}</p>
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
    return {
      error: null
    }
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
      try{
        await this.$axios.post("/api/v1/users", {
          user: registrationInfo
        })
        this.$router.push('/login')
      } catch (error){
        if (error.response.status == 409){
          this.error = error.response.data
        } else{
          this.error = "Hubo un error, porfavor confirme que ambas contraseñas coincidan y tengan mas de 8 digitos"
        }
      }
    }
  }
}
</script>