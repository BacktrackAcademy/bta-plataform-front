<template>
  <section class="min-h-screen bg-bta-blue lg:px-16 py-10">
    <h1 class="text-3xl text-center text-white font-semibold font-oswald mt-3 mb-6">
      Experiencia Laboral
    </h1>

    <form class="w-full max-w-[1400px] mx-auto">
      <section
        class="w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)] mx-auto py-2"
      >
        <div
          class="sm:w-3/4 lg:w-1/2 mx-auto flex flex-col gap-4 bg-bta-dark-blue p-6 md:p-8 relative rounded-lg"
        >
          <div class="mb-8">
            <button class="text-white hover:text-gray-muted font-inconsolata">
              Agregar Experiencia Laboral
            </button>
          </div>

          <div>
            <div class="flex justify-between text-white text-2xl font-oswald">
              <h4 class="mb-5 mt-3 font-bold">Experiencia</h4>
              <button class="hover:text-red-700 font-bold">Eliminar</button>
            </div>
            <!-- <hr> -->
            <div>
              <div class="flex flex-col mb-8">
                <label
                  for="position"
                  class="text-white font-bold font-inconsolata mb-2"
                  >Cargo</label
                >
                <!-- <input type="text" class="form-input" v-model=""> -->
                <input type="text" class="form-input" />
              </div>
              <div class="flex flex-col mb-8">
                <label
                  for="enterprise"
                  class="text-white font-bold font-inconsolata mb-2"
                  >Empresa</label
                >
                <input type="text" class="form-input" />
              </div>
              <div class="flex flex-col mb-8">
                <label
                  for="nacionality"
                  class="text-white font-bold font-inconsolata mb-2"
                  >País</label
                >
                <v-select
                  v-model="user.country_id"
                  name="nacionality"
                  id="nacionality"
                  :options="countries"
                  :reduce="(option) => option.id"
                  class="v-select bg-gray-border h-[40px] rounded"
                  label="name"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  </section>
</template>
<script>
export default {
  layout: "perfil",
  name: "Edit-experience",
  data() {
    return {
      user: {
        name: this.$auth.user.name,
        lastname: this.$auth.user.lastname,
        username: this.$auth.user.username,
      },
      universities: [],
      countries: [],
    };
  },
  created() {
    console.log(this.$auth.user);
  },
  methods: {
    getCountries() {
      this.$axios.get("api/v1/countries").then((res) => {
        this.countries = res.data;
      });
    },
  },
};
</script>
<style scoped>
.form-input {
  @apply outline-none border-none bg-gray-border rounded py-2 px-4 text-white w-full;
}

.v-select {
  --vs-selected-bg: #565982;
  --vs-selected-color: #fff;
  --vs-selected-border-color: #565982;
  --vs-selected-border-width: 1px;
  --vs-selected-border-style: solid;
  --vs-selected-border-radius: 0;
  --vs-selected-padding: 0.5rem;
  --vs-selected-font-weight: 400;
  --vs-controls-color: #ec1075;
  --vs-search-input-color: #070916;
}
</style>
