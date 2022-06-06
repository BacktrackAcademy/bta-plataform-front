<template>
  <div class="p-4 flex flex-col">
    <div class="relative rounded-lg overflow-hidden">
      <input type="text" class="w-full bg-[#242424] text-sm text-white rounded-lg px-4 py-2 placeholder:text-white placeholder:opacity-50" placeholder="Buscar área, especialidad, curso…">
      <div class="w-14 h-full absolute top-0 right-0 bg-bta-pink flex justify-center items-center">
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
      </div>
    </div>
    <div class="flex flex-col mb-5">
      <div
        class="px-1.5 pt-2 pb-1 text-white border-b border-white font-oswald text-lg"
        v-for="link, key in links"
        :key="key"
        @click="closeFunction()"
      >
        <nuxt-link class="block" :to="link.url">
          {{link.name}}
        </nuxt-link>
      </div>
    </div>
    <div @click="closeFunction">
      <nuxt-link to="/login" class="block bg-bta-pink text-white text-xl font-oswald rounded-lg py-2 text-center my-0">Inicia sesión o Regístrate</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HamburgerMenu",
    props: ["close"],
    data() {
      return {
        links:[
          { name: "Felipe Barrios",url: "/login" },
          { name: "Cursos", url: "/login" },
          { name: "Artículos", url: "/login" },
          { name: "Debates", url: "/login" },
          { name: "Noticias", url: "/login" },
          { name: "Planes", url: "/login" },
        ]
      }
    },
    methods:{
      closeFunction() {
        this.close();
      },
    }
  }
</script>