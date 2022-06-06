<template>
  <div>
    <section class=" bg-bta-dark-blue ">
      <div class="px-3 mx-auto">
        <div class="pt-48 lg:ml-[8.3333%] max-w-xl lg:max-w-2xl ">
          <h1 class="font-semibold font-oswald text-5xl text-white mb-2">
            DESARROLLA TUS HABILIDADES EN CIBERSEGURIDAD CON NUESTRA PLATAFORMA
          </h1>
          <p class="text-[#cacaca] text-lg font-mono py-4">Te acompañamos para que te conviertas en un especialista del
            Hacking.</p>
          <button class="px-5 py-4 text-white bg-bta-pink font-oswald text-base font-normal leading-snug">REGISTRATE
            AHORA</button>
        </div>
      </div>

      <div class="mx-4">
        <div class="" v-for="(pokemon, i) in pokemons" :key="i">
          <p class="text-white">{{ pokemon.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 20,
      pokemons: [],
    }
  },

  mounted() {
    this.getCourses();
  },
  created() {
  },

  methods: {
    getCourses() {
      this.$axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        .then(response => {
          this.pokemons = response.data.results
        })
        .catch(e => console.error(e))
    }
  },
}
</script>