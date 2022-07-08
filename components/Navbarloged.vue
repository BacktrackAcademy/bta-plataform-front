<template>
  <nav class="top-0">
    <div :class="{ ' -translate-y-[300%]': !hamburgerMenuIsOpen}"
      class="block lg:hidden fixed w-full bg-bta-dark-blue top-20 left-0 z-0 overflow-y-scroll h-full max-h-[calc(100%-5rem)] duration-500">
      <HamburgerMenu :close="closeBurgerMenu" />
    </div>
    <div class="fixed top-0 left-0 flex gap-6 items-center bg-bta-dark-blue px-8 lg:px-16 w-full h-20 z-10">
      <div @click.prevent="closeBurgerMenu">
        <nuxt-link to="/">
          <img class="w-32" src="~/assets/logo.svg" />
        </nuxt-link>
      </div>
      <div class="hidden lg:block relative">
        <form class="flex flex-row-reverse gap-1 bg-gray-border items-center px-3 py-2 rounded-full overflow-hidden"
          action="/search">
          <input class="bg-transparent text-white w-60 outline-none text-sm focus:translate-x-10 searcher__input"
            type="text" placeholder="¿Qué te gustaría aprender?" value="" />
          <svg class="text-white searcher__icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </form>
      </div>
      <div
        class="hidden lg:grid grid-flow-col auto-cols-auto items-center justify-items-center gap-8 ml-auto uppercase text-sm">
        <div class="relative" id="dropdown-selector">

          <label for="touch">
            <span class="reference-span bg-bta-dark-blue flex items-center">
              <img class="w-6 h-6 rounded-full mr-2" :src="this.$auth.user.avatar_url_small" />
              {{ $auth.user.name }}
              <ChevronDown class="float-right right-[10%] top-6" />
            </span>
          </label>
          <input type="checkbox" id="touch"
            class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" v-model="dropdownState">
          <ul
            class="dropdown-menu bg-bta-dark-blue height-0 peer-checked:h-[200px] peer-checked:border-[1px] peer-checked:border-bta-section">
            <li>
              <NuxtLink to="/perfil" class="nav__link flex items-center" @click.native="dropdownState=false">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 20 26">
                  <path id="Trazado_21367" data-name="Trazado 21367"
                    d="M19.667,8.333A5.333,5.333,0,1,1,14.333,3,5.333,5.333,0,0,1,19.667,8.333Zm-5.333,9.333A9.333,9.333,0,0,0,5,27H23.667a9.5,9.5,0,0,0-2.151-5.96,9.163,9.163,0,0,0-7.183-3.373Z"
                    transform="translate(-4 -2)" fill="none" stroke="#fff" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" />
                </svg>
                <span>Tu Perfil</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/perfil/editar" class="nav__link flex items-center" @click.native="dropdownState=false">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 27.401 27.402">
                  <g id="Grupo_8998" data-name="Grupo 8998" transform="translate(-2 -2)">
                    <path id="Trazado_21371" data-name="Trazado 21371"
                      d="M13.337,4.859a2.432,2.432,0,0,1,4.728,0,2.433,2.433,0,0,0,3.631,1.5A2.434,2.434,0,0,1,25.04,9.707a2.433,2.433,0,0,0,1.5,3.63,2.432,2.432,0,0,1,0,4.728,2.433,2.433,0,0,0-1.5,3.631,2.434,2.434,0,0,1-3.345,3.345,2.433,2.433,0,0,0-3.63,1.5,2.432,2.432,0,0,1-4.728,0,2.433,2.433,0,0,0-3.631-1.5,2.434,2.434,0,0,1-3.345-3.345,2.433,2.433,0,0,0-1.5-3.63,2.432,2.432,0,0,1,0-4.728,2.433,2.433,0,0,0,1.5-3.631A2.434,2.434,0,0,1,9.707,6.361a2.432,2.432,0,0,0,3.63-1.5Z"
                      transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2" />
                    <path id="Trazado_21372" data-name="Trazado 21372"
                      d="M17.467,13.234A4.234,4.234,0,1,1,13.234,9,4.234,4.234,0,0,1,17.467,13.234Z"
                      transform="translate(2.467 2.467)" fill="none" stroke="#fff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2" />
                  </g>
                </svg>
                <span>Configuración</span>
              </NuxtLink>
            </li>
            <li>
              <a href="#" class=" nav__link flex items-center" @click.prevent="$auth.logout()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 31.508 24.624">
                  <path id="sign-in-alt"
                    d="M23.975,86.131H19.134a.694.694,0,0,1-.692-.692V83.134a.694.694,0,0,1,.692-.692h4.841A1.842,1.842,0,0,0,25.82,80.6V69.533a1.842,1.842,0,0,0-1.844-1.844H19.134A.694.694,0,0,1,18.443,67V64.692A.694.694,0,0,1,19.134,64h4.841a5.534,5.534,0,0,1,5.533,5.533V80.6A5.534,5.534,0,0,1,23.975,86.131ZM21.267,74.547l-9.682-9.682a1.385,1.385,0,0,0-2.363.98v5.533H1.383A1.38,1.38,0,0,0,0,72.76v5.533a1.38,1.38,0,0,0,1.383,1.383H9.221v5.533a1.385,1.385,0,0,0,2.363.98l9.682-9.682A1.4,1.4,0,0,0,21.267,74.547Z"
                    transform="translate(1 -63)" fill="none" stroke="#fff" stroke-width="2" />
                </svg>
                <span>Cerrar Sesión</span>
              </a>
            </li>
          </ul>

        </div>
        <nuxt-link v-for="link,key in links" :key="key" :to="link.url" class="text-white font-oswald relative">
          <span class="relative text-white">
            {{link.name}}
          </span>
        </nuxt-link>
        <nuxt-link to="/login" class="
            shadow-md
            shadow-bta-pink/50
            text-white
            font-oswald
            border-bta-pink
            border
            px-3
            py-1
            flex-shrink-0
          ">
          Vuélvete Pro!
        </nuxt-link>
      </div>
      <HamburgerButton :toggleProp="toggleBurgerMenu" :state="hamburgerMenuIsOpen" />
    </div>
  </nav>
</template>

<script>
import HamburgerButton from "~/components/hamburgerMenu/hamburgerButton.vue"
import ChevronDown from "./icons/Chevron-down.vue";

  export default {
    name: "Navbar",
    components: {
      HamburgerButton,
      ChevronDown
    },
    data() {
      return {
        hamburgerMenuIsOpen: false,
        links:[
          { name: "Cursos", url: "/cursos" },
          // { name: "Artículos", url: "/login" },
          // { name: "Debates", url: "/login" },
          // { name: "Noticias", url: "/login" },
        ],
        dropdownState: false,
      }
    },
    mounted () {
      document.addEventListener('click', this.closeDropdown)
    },
    beforeDestroy () {
      document.removeEventListener('click',this.closeDropdown)
    },
    methods: {
      closeBurgerMenu() {
        this.hamburgerMenuIsOpen = false;
      },
      toggleBurgerMenu() {
        this.hamburgerMenuIsOpen = !this.hamburgerMenuIsOpen;
      },
      closeDropdown(e) {
        if (!this.$el.querySelector('#dropdown-selector').contains(e.target)) {
          this.dropdownState = false
        }
      },
    },
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

  .nav__link{
    @apply text-white font-oswald relative hover:bg-bta-pink py-5 px-6;
  }

  .reference-span {
    @apply font-oswald;
    padding: 0 30px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dropdown-menu {
    position: absolute;
    clear: both;
    top: 40px;
    width:190px;
    height: 0px;
    overflow: hidden;
    transition: height .4s ease;
  }
</style>