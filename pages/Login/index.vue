<template>
  <div class="h-full w-full">
    <div class="h-screen flex">
      <div class="flex w-1/2 bg-body-back justify-around items-center">
        <div>
          <h1 class="text-white font-bold text-4xl font-oswald uppercase">Happy Hacking</h1>
          <p class="text-white mt-1">Comienza tu carrera en Ciberseguridad</p>
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <UserAuthForm buttonText="Iniciar sesión" :submitForm="loginUser"/>

          <!-- <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> -->
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
  import UserAuthForm from "@/components/auth/UserAuthForm";
  export default {
    middleware: "auth",
    name: "Login",
    data() {
      return {
      }
    },
    components: {
      UserAuthForm
    },
    methods: {
      loginUser(loginInfo) {
        try {
          this.$auth.loginWith("local", {
            data: { user: loginInfo },
            headers: { "Content-Type": "application/json" }
          }).then(res => {
            const user = res.data.user
            this.$auth.setUser(user)
            console.log('con user', res.data)
          });
        } catch(error) {
          console.log(error)
        }
      },
      validateLogin(uid, client, accessToken) {
        this.$axios.get("api/v1/tokens", {
          headers: {
            "uid": uid,
            "client": client,
            "access-token": accessToken
          }
        }).then((response) => {
          if (response.data.success) {
            console.log("loggedIn:", this.$store.state.auth.loggedIn)
          }
        }).catch((error) => {
           console.log(error)
        });
      },
      persistLogin (uid, client, accessToken) {
        this.$auth.$storage.setUniversal("uid", uid)
        this.$auth.$storage.setUniversal("client", client)
        this.$auth.$storage.setUniversal("access-token", accessToken)
      }
    }
  }
</script>