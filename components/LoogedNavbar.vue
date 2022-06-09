<template>
  <nav class="top-0 header_area">
    <div
      :class="{ ' -translate-y-[300%]': !hamburgerMenuIsOpen }"
      class="block lg:hidden fixed w-full bg-bta-dark-blue top-20 left-0 z-0 overflow-y-scroll h-full max-h-[calc(100%-5rem)] duration-500"
    >
      <HamburgerMenu :close="closeBurgerMenu" />
    </div>
    <div
      class="fixed top-0 navbar left-0 flex gap-6 items-center bg-bta-dark-blue px-8 lg:px-16 w-full h-20 z-10"
    >
      <div @click.prevent="closeBurgerMenu">
        <nuxt-link to="/">
          <img class="w-32" src="~/assets/logo.svg" />
        </nuxt-link>
      </div>
      <div class="hidden lg:block relative">
        <form
          class="flex flex-row-reverse gap-1 bg-gray-border items-center px-3 py-2 rounded-full overflow-hidden"
          action="/search"
        >
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
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </form>
      </div>
      <div
        class="hidden lg:grid grid-flow-col auto-cols-auto items-center justify-items-center gap-8 ml-auto uppercase text-sm"
      >
        <li class="nav-item submenu dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle nav__link"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            >{{ $auth.user.name }}</a
          >
          <ul class="dropdown-menu">
            <li class="nav-item">
              <a class="nav-link" >Perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
                >Configuracion</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" 
                >Cerrar Sesión</a
              >
            </li>
          </ul>
        </li>
        <nuxt-link
          v-for="(link, key) in links"
          :key="key"
          :to="link.url"
          class="nav__link"
        >
          <span class="relative text-white">
            {{ link.name }}
          </span>
        </nuxt-link>
        <nuxt-link
          to="/login"
          class="shadow-md shadow-bta-pink/50 text-white font-oswald border-bta-pink border px-3 py-1 flex-shrink-0"
        >
          Vuélvete Pro!
        </nuxt-link>
      </div>
      <HamburgerButton
        :toggleProp="toggleBurgerMenu"
        :state="hamburgerMenuIsOpen"
      />
    </div>
  </nav>
</template>

<script>
import HamburgerButton from "~/components/hamburgerMenu/hamburgerButton.vue";

export default {
  name: "Navbar",
  components: {
    HamburgerButton,
  },
  data() {
    return {
      hamburgerMenuIsOpen: false,
      links: [
        { name: "Cursos", url: "/cursos" },
        // { name: "Artículos", url: "/login" },
        // { name: "Debates", url: "/login" },
        // { name: "Noticias", url: "/login" },
      ],
    };
  },
  methods: {
    closeBurgerMenu() {
      this.hamburgerMenuIsOpen = false;
    },
    toggleBurgerMenu() {
      this.hamburgerMenuIsOpen = !this.hamburgerMenuIsOpen;
    },
  },
};
</script>
<style scoped>


 .navbar .nav-item.submenu {
  position: relative;
}
 .navbar .nav-item.submenu ul {
  border: none;
  padding: 0px;
  border-radius: 0px;
  box-shadow: none;
  margin: 0px;
  background: #EC1075;
  z-index: 10000;
}
@media (min-width: 992px) {
   .navbar .nav-item.submenu ul {
    position: absolute;
    top: 120%;
    left: 0px;
    min-width: 200px;
    text-align: left;
    opacity: 0;
    transition: all 300ms ease-in;
    visibility: hidden;
    display: block;
    border: none;
    padding: 0px;
    border-radius: 0px;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  }
}
 .navbar .nav-item.submenu ul:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #eeeeee transparent transparent transparent;
  position: absolute;
  right: 24px;
  top: 45px;
  z-index: 10000;
  opacity: 0;
  transition: all 400ms linear;
}
 .navbar .nav-item.submenu ul .nav-item {
  display: block;
  float: none;
  margin-right: 0px;
  border-bottom: 1px solid black;
  margin-left: 0px;
  transition: all 0.4s linear;
}
 .navbar .nav-item.submenu ul .nav-item .nav-link {
  line-height: 45px;
  color: white;
  padding: 0px 30px;
  transition: all 150ms linear;
  display: block;
  text-transform: capitalize;
  margin-right: 0px;
}
 .navbar .nav-item.submenu ul .nav-item:last-child {
  border-bottom: none;
}
 .navbar .nav-item.submenu ul .nav-item:hover .nav-link {
  color: 'red';
}
@media (min-width: 992px) {
   .navbar .nav-item.submenu:hover ul {
    visibility: visible;
    opacity: 1;
    top: 100%;
  }
}
 .navbar .nav-item.submenu:hover ul .nav-item {
  margin-top: 0px;
}
 .navbar .nav-item:last-child {
  margin-right: 0px;
}
.searcher__input {
  transition: 0.5s;
}
.searcher__input:focus {
  transform: translateX(-25px);
}
.searcher__icon {
  transition: 0.5s;
}
.searcher__input:focus ~ .searcher__icon {
  transform: translateX(-50px);
  opacity: 0;
}

.nav__link {
  @apply text-center text-white font-oswald relative before:block before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-bta-pink before:scale-x-0 before:transition-all hover:before:scale-x-100;
}
</style>
