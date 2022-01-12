<template>
  <nav class="top-0">
    <div
      :class="{ ' -translate-y-[300%]': !hamburgerMenuIsOpen}"
      class="block lg:hidden fixed w-full bg-body-back top-20 left-0 z-0 overflow-y-scroll h-full max-h-[calc(100%-5rem)] duration-500"
    >
      <HamburgerMenu :close="closeBurgerMenu" />
    </div>
    <div class="fixed top-0 left-0 flex gap-6 items-center bg-header-back px-8 lg:px-16 w-full h-20 z-10">
      <div @click.prevent="closeBurgerMenu">
        <nuxt-link to="/">
          <img class="w-32" src="~/assets/logo.svg" />
        </nuxt-link>
      </div>
      <div class="hidden lg:block relative">
        <form class="flex flex-row-reverse gap-1 bg-gray-border items-center px-3 py-2 rounded-full overflow-hidden" action="/search">
          <input
            class="bg-transparent text-white w-60 outline-none text-sm focus:translate-x-10 searcher__input"
            type="text"
            placeholder="¿Qué te gustaría aprender?"
            value=""
          />
          <svg
            class="text-white searcher__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none" stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </form>
      </div>
      <div class="hidden lg:flex items-center gap-5 ml-auto uppercase text-sm">
        <div class="text-white font-oswald">Cursos</div>
        <div class="text-white font-oswald">Artículos</div>
        <div class="text-white font-oswald">Debates</div>
        <div class="text-white font-oswald">Noticias</div>
        <div class="text-white font-oswald border-principal border px-3 py-1 flex-shrink-0">Vuélvete Pro!</div>
        <div class="text-white font-oswald">Iniciar Sesión</div>
      </div>
      <HamburgerButton :toggleProp="toggleBurgerMenu" :state="hamburgerMenuIsOpen" />
    </div>
  </nav>
</template>

<script>
  import HamburgerButton from "~/components/hamburgerMenu/hamburgerButton.vue"

  export default {
    name: "header",
    components: {
      HamburgerButton
    },
    data() {
      return {
        hamburgerMenuIsOpen: false,
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
  .searcher__input{
    transition: .5s;
  }
  .searcher__input:focus{
    transform: translateX(-25px);
  }
  .searcher__icon{
    transition: .5s;
  }
  .searcher__input:focus ~ .searcher__icon{
    transform: translateX(-50px);
    opacity: 0;
  }
</style>