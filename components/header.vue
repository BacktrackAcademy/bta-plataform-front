<template>
  <nav class="top-0">
    <div
      :class="{ ' -translate-y-[300%]': !hamburgerMenuIsOpen}"
      class="block lg:hidden fixed w-full bg-bta-dark-blue top-20 left-0 z-0 overflow-y-scroll h-full max-h-[calc(100%-5rem)] duration-500"
    >
      <HamburgerMenu :close="closeBurgerMenu" />
    </div>
    <div class="fixed top-0 left-0 flex gap-6 items-center bg-bta-dark-blue px-8 lg:px-16 w-full h-20 z-10">
      <div @click.prevent="closeBurgerMenu">
        <nuxt-link to="/">
          <img class="w-32" src="~/assets/logo.svg" />
        </nuxt-link>
      </div>
      <div class="hidden lg:grid grid-flow-col auto-cols-auto items-center justify-items-center gap-8 ml-auto uppercase text-sm">
        <nuxt-link
          v-for="link,key in links"
          :key="key"
          :to="link.url"
          class="nav__link"
        >
          <span class="relative text-white">
            {{link.name}}
          </span>
        </nuxt-link>
        <nuxt-link
          to="/login"
          class="
            shadow-md
            shadow-bta-pink/50
            text-white
            font-oswald
            border-bta-pink
            border
            px-3
            py-1
            flex-shrink-0
          "
        >
          Vuélvete Pro!
        </nuxt-link>
        <nuxt-link to="/login" class="nav__link">Iniciar sesión</nuxt-link>
      </div>
      <HamburgerButton :toggleProp="toggleBurgerMenu" :state="hamburgerMenuIsOpen" />
    </div>
  </nav>
</template>

<script>
  import HamburgerButton from "~/components/hamburgerMenu/hamburgerButton.vue"

  export default {
    name: "Navbar",
    components: {
      HamburgerButton
    },
    data() {
      return {
        hamburgerMenuIsOpen: false,
        links:[
          { name: "Cursos", url: "/cursos" },
          { name: "Artículos", url: "/articulos" },
          { name: "Debates", url: "/debates" },
          { name: "Noticias", url: "/noticias" },
        ]
      }
    },
    methods: {
      closeBurgerMenu() {
        this.hamburgerMenuIsOpen = false;
      },
      toggleBurgerMenu() {
        this.hamburgerMenuIsOpen = !this.hamburgerMenuIsOpen;
      },
    }
  }
</script>
<style scoped>

  .nav__link{
    @apply text-center text-white font-oswald relative before:block before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-bta-pink before:scale-x-0 before:transition-all hover:before:scale-x-100;
  }
</style>
