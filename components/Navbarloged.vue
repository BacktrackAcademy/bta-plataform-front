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
      <div
        class="hidden lg:grid grid-flow-col auto-cols-auto items-center justify-items-center gap-8 ml-auto uppercase text-sm">
       <div class="relative" id="dropdown-selector">

          <label for="touch">
            <span class="reference-span bg-bta-dark-blue">{{ $auth.user.name }}
              <ChevronDown class="float-right right-[10%] top-6" />
            </span>
          </label>
          <input type="checkbox" id="touch" class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          v-model="dropdownState"
          >
          <ul
           class="dropdown-menu absolute bg-bta-dark-blue  height-0 peer-checked:h-[225px] peer-checked:border-[1px] peer-checked:border-bta-section"
           >
            <NuxtLink to="/perfil" @click.native="dropdownState=false">
              <li class="nav__link">
                Perfil
              </li>
            </NuxtLink>
            <li class="nav__link">
              <a href="#" >Configuración</a></li>
            <li class="nav__link">
              <p @click.prevent="$auth.logout()" class="cursor-pointer">
              Cerrar Sesión</p></li>
          </ul>

        </div>
        <nuxt-link v-for="link,key in links" :key="key" :to="link.url" class="nav__link">
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
          { name: "Artículos", url: "/articulos" },
          { name: "Debates", url: "/debates" },
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
  .nav__link{
    @apply text-center text-white font-oswald relative before:block before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-gray-800 hover:before:bg-bta-pink before:scale-x-75 before:transition-all hover:before:scale-x-100;
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
    width: 100%;
    height: 0px;
    overflow: hidden;
    text-align: center;
    transition: height .4s ease;
  }

  .dropdown-menu li {
    padding: 25px 30px;
  }
</style>
