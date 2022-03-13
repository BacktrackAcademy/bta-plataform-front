<template>
  <div class="h-full w-full">
    <div class="flex justify-center items-center h-full w-full">
      <div class="flex flex-col gap-4">
        <div class="text-center mobile:xl table:text-3xl text-purple-principal font-bold uppercase">
          Iniciar sesión
        </div>
        <UserAuthForm buttonText="Iniciar sesión" :submitForm="loginUser"/>
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
      return {}
    },
    components: {
      UserAuthForm
    },
    methods: {
      async loginUser(loginInfo) {
        try {
          await this.$auth.loginWith("local", {
            data: loginInfo
          }).then(res => {
            const user = res.data.user
            this.$auth.setUser(user)
            const uid         = res.headers["uid"];
            const client      = res.headers["client"];
            const accessToken = res.headers["access-token"];
            this.validateLogin(uid, client, accessToken)
            this.persistLogin(uid, client, accessToken)
          });
        } catch(error) {
          console.log(error)
        }
      },
      validateLogin(uid, client, accessToken) {
        this.$axios.get("api/v1/auth/validate_token", {
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