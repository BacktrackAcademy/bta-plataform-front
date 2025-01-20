<script>
import UserAuthForm from '@/components/auth/UserAuthForm'

export default {
  name: 'Login',
  components: {
    UserAuthForm,
  },
  middleware: 'auth',
  data() {
    return {
      error: null,
    }
  },

  // SEO Meta Tags
  head: {
    title: 'Cursos online de Hacking ético - Backtrack Academy',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Diversos cursos esperan por tí. No esperes más, regístrate y comienza a adquirir una nueva habilidad de inmediato.',
      },
    ],
  },
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith('local', {
        data: { user: loginInfo },
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        const user = res.data.user
        this.$auth.setUser(user)
      }).catch((error) => {
        this.error = error.response.data.error
      })
    },

    async loginUserGithub() {
      await this.$auth.loginWith('github')
    },
    async loginUserFacebook() {
      await this.$auth.loginWith('facebook')
    },
    async loginUserDiscord() {
      await this.$auth.loginWith('discord')
    },
    async loginUserGoogle() {
      await this.$auth.loginWith('google')
    },

    validateLogin(uid, client, accessToken) {
      this.$axios.get('api/v1/tokens', {
        headers: {
          'uid': uid,
          'client': client,
          'access-token': accessToken,
        },
      }).then((response) => {
        if (response.data.success) {
          console.warn('loggedIn:', this.$store.state.auth.loggedIn)
        }
      }).catch((error) => {
        console.error(error)
      })
    },
    persistLogin(uid, client, accessToken) {
      this.$auth.$storage.setUniversal('uid', uid)
      this.$auth.$storage.setUniversal('client', client)
      this.$auth.$storage.setUniversal('access-token', accessToken)
    },
  },
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
          <h1 class="text-gray-800 font-bold text-2xl mb-8">
            Inicia Sesión
          </h1>
          <p v-if="error" class="text-red-500 lg:mb-3 mb-1">
            {{ error }}
          </p>
          <UserAuthForm button-text="Iniciar sesión" @register="loginUser" />
          <div>
            <p class="text-center">
              <span class="text-sm ">¿No tienes una cuenta? </span>
              <NuxtLink to="/registro">
                <span class="text-sm  hover:text-blue-500 hover:underline cursor-pointer">Regístrate</span>
              </NuxtLink>
            </p>
          </div>

          <p class="text-gray-800 font-bold my-4">
            O usa una de tus redes
          </p>
          <div class="mb-6">
            <div class="grid grid-cols-4 gap-2 ">
              <button
                class="inline-flex justify-center items-center flex-nowrap p-2 px-4 text-white rounded-lg bg-bta-blue transform hover:scale-105 transition"
                @click.prevent="loginUserGoogle"
              >
                <span class="flex flex-nowrap items-center">
                  <Icon name="logos:google-icon" class="h-5 w-5 text-white" />
                </span>
                <span class="font-semibold text-sm pl-1 hidden sm:inline">
                  <span class="mr-1">Google</span>
                </span>
              </button>
              <button
                class="inline-flex justify-center items-center flex-nowrap p-2 px-4 text-white rounded-lg bg-bta-blue transform hover:scale-105 transition"
                @click.prevent="loginUserGithub"
              >
                <span class="flex flex-nowrap items-center">
                  <Icon name="fa6-brands:github" class="h-5 w-5 fill-white" />
                </span>
                <span class="font-semibold text-sm pl-1 hidden sm:inline">
                  <span class="mr-1">Github</span>
                </span>
              </button>
              <button
                class="inline-flex justify-center items-center flex-nowrap p-2 px-4 text-white rounded-lg bg-bta-blue transform hover:scale-105 transition"
                @click.prevent="loginUserFacebook"
              >
                <span class="flex flex-nowrap items-center">
                  <Icon name="logos:facebook" class="h-5 w-5" />
                </span>
                <span class="font-semibold text-sm pl-1 hidden sm:inline">
                  <span class="mr-1">Facebook</span>
                </span>
              </button>
              <button
                class="inline-flex justify-center items-center flex-nowrap p-2 px-4 text-white rounded-lg bg-bta-blue transform hover:scale-105 transition"
                @click.prevent="loginUserDiscord"
              >
                <span class="flex flex-nowrap items-center">
                  <Icon name="logos:discord-icon" class="h-5 w-5" />
                </span>
                <span class="font-semibold text-sm pl-1 hidden sm:inline">
                  <span class="mr-1">Discord</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
