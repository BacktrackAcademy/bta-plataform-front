<template>
  <nav class="top-0">
    <div
      class="fixed w-60 bg-red-600 top-0 left-0 z-0 h[100px] translate-y-52"
    >
      <HamburgerMenu />
    </div>
    <div class="fixed flex gap-6 items-center bg-black px-8 lg:px-16 py-4 w-full z-10">
      <img class="w-32" src="~/assets/logo.svg" />
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
      <HamburgerButton/>
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
      return {}
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