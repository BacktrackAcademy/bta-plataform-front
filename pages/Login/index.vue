<template>
  <div class="h-full w-full">
    <div class="h-screen flex">
      <div class="hidden md:flex md:w-2/5 lg:w-1/2 bg-bta-blue justify-around items-center">
        <div>
          <h1 class="text-white font-bold text-4xl font-oswald uppercase">Happy Hacking </h1>
          <p class="text-white mt-1">Comienza tu carrera en Ciberseguridad</p>
        </div>
      </div>
      <div class="flex w-full md:w-3/5 lg:w-1/2 justify-center items-center bg-white p-5 lg:p-10">
        <form class="bg-white w-full lg:10/12 xl:w-9/12">
          <h1 class="text-gray-800 font-bold text-2xl mb-8">Inicia Sesión</h1>
          <!-- <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p> -->
          <p class="text-gray-800 font-bold mb-4">Usa tu correo electrónico</p>
          <UserAuthForm buttonText="Iniciar sesión" :submitForm="loginUser" />
          <div>
            <p class="text-center">
              <span class="text-sm ">¿No tienes una cuenta?</span>
              <NuxtLink to="/registro">
                <span class="text-sm  hover:text-blue-500 hover:underline cursor-pointer">Regístrate</span>
              </NuxtLink>
            </p>
          </div>
          
          <p class="text-gray-800 font-bold my-4">O usa una de tus redes</p>
          <div class="mb-6">
            <div class="grid grid-cols-4 gap-2 ">
              <a target @click="loginUserGoogle"
                class="inline-flex justify-center items-center flex-nowrap p-2 px-4 text-white rounded-sm bg-bta-blue hover:bg-bta-dark-blue hover:cursor-pointer"
                >
                <span class="flex flex-nowrap items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 184 184" class="svg-icon s-mr-05 big" id="" fill="currentColor" title=""><path d="M40.778,199.771l-6.4,23.91-23.409.5a92.161,92.161,0,0,1-.677-85.909h.005l20.841,3.821,9.13,20.716a54.906,54.906,0,0,0,.516,36.967Z" transform="translate(0 -88.578)" fill="#fbbb00"></path><path d="M350,208.176a91.965,91.965,0,0,1-32.8,88.932l-.005-.005-26.25-1.339-3.715-23.192a54.831,54.831,0,0,0,23.591-28H261.628v-36.4H350Z" transform="translate(-167.605 -133.363)" fill="#518ef8"></path><path d="M169.136,361.955l.005.005A92.03,92.03,0,0,1,30.509,333.814l29.814-24.405a54.716,54.716,0,0,0,78.847,28.014Z" transform="translate(-19.545 -198.215)" fill="#28b446"></path><path d="M169.061,21.18l-29.8,24.4A54.709,54.709,0,0,0,58.6,74.227L28.629,49.69h-.005A92.019,92.019,0,0,1,169.061,21.18Z" transform="translate(-18.337)" fill="#f14336"></path>
                  </svg>
                </span>
                <span class="font-semibold pl-1 hidden sm:inline">
                  <span class="mr-1">Google</span>
                </span>
              </a>
              <a target @click="loginUserGithub"
                class="inline-flex justify-center items-center flex-nowrap p-2 px-4 text-white rounded-sm bg-bta-blue hover:bg-bta-dark-blue hover:cursor-pointer"
                >
                <span class="flex flex-nowrap items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 16 16" class="svg-icon s-mr-05 big" id="" fill="currentColor" title=""><path d="M5.35161 12.8832C5.35161 12.9493 5.27742 13.0023 5.18387 13.0023C5.07742 13.0122 5.00323 12.9593 5.00323 12.8832C5.00323 12.817 5.07742 12.7641 5.17097 12.7641C5.26774 12.7541 5.35161 12.8071 5.35161 12.8832ZM4.34839 12.7343C4.32581 12.8005 4.39032 12.8766 4.4871 12.8964C4.57097 12.9295 4.66774 12.8964 4.6871 12.8302C4.70645 12.7641 4.64516 12.688 4.54839 12.6582C4.46452 12.635 4.37097 12.6681 4.34839 12.7343ZM5.77419 12.6781C5.68065 12.7012 5.61613 12.7641 5.62581 12.8402C5.63548 12.9063 5.71935 12.9493 5.81613 12.9262C5.90968 12.903 5.97419 12.8402 5.96452 12.774C5.95484 12.7111 5.86774 12.6681 5.77419 12.6781ZM7.89677 0C3.42258 0 0 3.48382 0 8.07266C0 11.7418 2.25161 14.8815 5.46774 15.9865C5.88065 16.0626 6.02581 15.8012 6.02581 15.5862C6.02581 15.3811 6.01613 14.2496 6.01613 13.5548C6.01613 13.5548 3.75806 14.0511 3.28387 12.5689C3.28387 12.5689 2.91613 11.6061 2.3871 11.358C2.3871 11.358 1.64839 10.8385 2.43871 10.8485C2.43871 10.8485 3.24194 10.9146 3.68387 11.7021C4.39032 12.9791 5.57419 12.6119 6.03548 12.3935C6.10968 11.8642 6.31935 11.4969 6.55161 11.2786C4.74839 11.0734 2.92903 10.8055 2.92903 7.62271C2.92903 6.71288 3.17419 6.25631 3.69032 5.67402C3.60645 5.45897 3.33226 4.5723 3.77419 3.42757C4.44839 3.21252 6 4.32086 6 4.32086C6.64516 4.13559 7.33871 4.03964 8.02581 4.03964C8.7129 4.03964 9.40645 4.13559 10.0516 4.32086C10.0516 4.32086 11.6032 3.20921 12.2774 3.42757C12.7194 4.57561 12.4452 5.45897 12.3613 5.67402C12.8774 6.25962 13.1935 6.71619 13.1935 7.62271C13.1935 10.8154 11.2935 11.0701 9.49032 11.2786C9.7871 11.5399 10.0387 12.0362 10.0387 12.8137C10.0387 13.9287 10.029 15.3083 10.029 15.5796C10.029 15.7946 10.1774 16.056 10.5871 15.9799C13.8129 14.8815 16 11.7418 16 8.07266C16 3.48382 12.371 0 7.89677 0ZM3.13548 11.4109C3.09355 11.444 3.10323 11.5201 3.15806 11.5829C3.20968 11.6359 3.28387 11.659 3.32581 11.616C3.36774 11.5829 3.35806 11.5069 3.30323 11.444C3.25161 11.3911 3.17742 11.3679 3.13548 11.4109ZM2.7871 11.1429C2.76452 11.1859 2.79677 11.2389 2.86129 11.272C2.9129 11.305 2.97742 11.2951 3 11.2488C3.02258 11.2058 2.99032 11.1528 2.92581 11.1198C2.86129 11.0999 2.80968 11.1098 2.7871 11.1429ZM3.83226 12.3207C3.78065 12.3637 3.8 12.463 3.87419 12.5259C3.94839 12.602 4.04194 12.6119 4.08387 12.5589C4.12581 12.5159 4.10645 12.4167 4.04194 12.3538C3.97097 12.2777 3.87419 12.2678 3.83226 12.3207ZM3.46452 11.8344C3.4129 11.8675 3.4129 11.9535 3.46452 12.0296C3.51613 12.1057 3.60323 12.1388 3.64516 12.1057C3.69677 12.0627 3.69677 11.9767 3.64516 11.9006C3.6 11.8245 3.51613 11.7914 3.46452 11.8344Z"></path>
                  </svg>
                </span>
                <span class="font-semibold pl-1 hidden sm:inline">
                  <span class="mr-1">Github</span>
                </span>
              </a>
              <a target @click="loginUserFacebook"
                class="inline-flex justify-center items-center flex-nowrap p-2 px-4 text-white rounded-sm bg-bta-blue hover:bg-bta-dark-blue hover:cursor-pointer"
                >
                <span class="flex flex-nowrap items-center">
                  <svg viewBox="0 0 36 36" class="" fill="url(#jsc_s_2)" height="1.25em" width="1.25em"><defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2"><stop offset="0%" stop-color="#0062E0"></stop><stop offset="100%" stop-color="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path class="fill-white" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                  </svg>
                </span>
                <span class="font-semibold pl-1 hidden sm:inline">
                  <span class="mr-1">Facebook</span>
                </span>
              </a>
              <a target @click="loginUserDiscord"
                class="inline-flex justify-center items-center flex-nowrap p-2 px-4 text-white rounded-sm bg-bta-blue hover:bg-bta-dark-blue hover:cursor-pointer"
                >
                <span class="flex flex-nowrap items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.25em" height="1.25em" viewBox="0 -28.5 256 256" version="1.1" preserveAspectRatio="xMidYMid">
                    <g>
                      <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fill-rule="nonzero"/>
                    </g>
                  </svg>
                </span>
                <span class="font-semibold pl-1 hidden sm:inline">
                  <span class="mr-1">Discord</span>
                </span>
              </a>
            </div>
          </div>
         
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

      async loginUserGithub(){
        await this.$auth.loginWith('github')
      },
      async loginUserFacebook(){
        await this.$auth.loginWith('facebook')
      },
      async loginUserDiscord(){
        await this.$auth.loginWith('discord')
      },
      async loginUserGoogle(){
        await this.$auth.loginWith('google')
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