<template>
  <section class="min-h-screen bg-bta-blue lg:px-16 py-10">
    <h1
      class="text-3xl text-center text-white font-semibold font-oswald mt-3 mb-6"
    >
      Formación Profesional
    </h1>

    <form class="w-full max-w-[1400px] mx-auto">
      <section
        class="w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)] py-2 mx-auto"
      >
        <div
          class="sm:w-3/4 lg:w-1/2 mx-auto flex flex-col gap-4 bg-bta-dark-blue p-6 md:p-8 relative rounded-lg"
        >
          <div class="text-white mb-8">
            <div>
              <legend class="font-inconsolata">Nivel de estudios</legend>
            </div>
            <input
              type="radio"
              name="nivelEstudios"
              value="1"
              v-model="user.nivel_estudios"
            />
            Secundaria
            <input
              type="radio"
              name="nivelEstudios"
              value="2"
              v-model="user.nivel_estudios"
            />
            Universidad
          </div>

          <div class="mb-8">
            <h2 class="text-white font-inconsolata">Habilidades</h2>
            <v-select
              multiple
              v-model="user.skills"
              :options="['react']"
              class="v-select"
            />
          </div>
          <div>
            <div class="mb-8">
              <button class="text-white hover:text-gray-muted font-inconsolata">
                Agregar Educación
              </button>
            </div>
            <div class="flex justify-between text-white text-2xl font-oswald">
              <h4 class="mb-5 mt-3 font-bold">Educación</h4>
              <button class="hover:text-red-700 font-bold">Eliminar</button>
            </div>
            <div class="flex flex-col mb-8">
              <label
                for="nacionality"
                class="text-white font-bold font-inconsolata mb-2"
                >Seleccione Universidad, Instituto u otra academia</label
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
          <div>
            <button
              class="bg-bta-pink px-4 py-2 text-white text-xl font-oswald font-medium"
            >
              Actualizar
            </button>
          </div>
        </div>
      </section>
    </form>
  </section>
</template>
<script>
export default {
  layout: "perfil",
  name: "Edit-education",
  data() {
    return {
      user: {
        name: this.$auth.user.name,
        lastname: this.$auth.user.lastname,
        aboutme: this.$auth.user.aboutme,
        headline: this.$auth.user.headline,
        username: this.$auth.user.username,
        email: this.$auth.user.email,
        birthdate: this.$auth.user.birthdate,
        country_id: this.$auth.user.country_id,
        skills: this.$auth.user.skills,
      },
      countries: [],
      universities: [],
    };
  },
};
</script>
<style scoped>
.v-select {
  /* --vs-selected-bg: #565982;
  --vs-selected-color: #fff;
  --vs-selected-border-color: #565982;
  --vs-selected-border-width: 1px;
  --vs-selected-border-style: solid;
  --vs-selected-border-radius: 0;
  --vs-selected-padding: 0.5rem;
  --vs-selected-font-weight: 400;
  --vs-controls-color: #EC1075;
  --vs-search-input-color: #070916; */
  /* --vs-dropdown-min-width: 160px; */
  --vs-dropdown-max-height: 100px;
}
</style>
