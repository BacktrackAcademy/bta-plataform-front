<template>
  <section class="min-h-screen bg-bta-blue lg:px-16 py-10">
    <h1 class="text-3xl text-center text-white font-bold font-oswald mt-3 mb-6">
      Editar Perfil
    </h1>

    <form class="w-full max-w-[1400px] mx-auto">
      <section
        class="w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)] mx-auto py-2"
      >
        <div
          class="sm:w-3/4 lg:w-1/2 mx-auto flex flex-col gap-4 bg-bta-dark-blue p-6 md:p-8 relative rounded-lg"
        >
          <div
            class="w-24 h-24 lg:w-32 lg:h-32 relative rounded-full overflow-hidden mx-auto mb-8"
          >
            <div class="relative w-full h-full">
              <img
                :src="user.avatar_url"
                class="rounded-full object-contain"
                :alt="user.name"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="user_name"
                >Nombre de Usuario</label
              >
              <input
                type="text"
                name=""
                id="user_name"
                placeholder="Nombre de Usuario"
                class="form-input"
                v-model="user.username"
              />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="titular">Titular</label>
              <input
                type="text"
                name=""
                id="titular"
                placeholder="Titular"
                class="form-input"
                v-model="user.headline"
              />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="name">Nombre</label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="Nombre"
                class="form-input"
                v-model="user.name"
              />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="lastname">Apellidos</label>
              <input
                type="text"
                name=""
                id="lastname"
                placeholder="Apellidos"
                class="form-input"
                v-model="user.lastname"
              />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="email"
                >Correo Electrónico</label
              >
              <input
                type="text"
                name=""
                id="email"
                placeholder="Correo Electrónico"
                class="form-input"
                v-model="user.email"
              />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="birthdate"
                >Fecha de Nacimiento</label
              >
              <input
                type="date"
                name=""
                id="birthdate"
                placeholder="Fecha de Nacimiento"
                class="form-input"
                v-model="user.birthdate"
              />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="nacionality"
                >Nacionalidad</label
              >
              <v-select
                v-model="user.country_id"
                name="nacionality"
                id="nacionality"
                placeholder="Nacionalidad"
                :options="countries"
                :reduce="(option) => option.id"
                class="v-select bg-gray-border h-[40px] rounded"
                label="name"
              />
            </div>
            <div class="flex flex-col m-cols-2">
              <label class="text-white mb-2" for="aboutme">Acerca de mi</label>
              <textarea
                type="text"
                name=""
                id="aboutme"
                placeholder="Acerca de mi"
                class="form-textarea mb-8"
                v-model="user.aboutme"
              />
            </div>
            <div class="flex gap-4 m-cols-2 mb-8 text-white">
              <input
                type="radio"
                id="people"
                value="people"
                v-model="user.user_type"
              />
              <label for="uno">Soy Estudiante Universitario</label>
              <input
                type="radio"
                id="professional"
                value="professional"
                v-model="user.user_type"
              />
              <label for="dos">Soy Profesional</label>
              <input
                type="radio"
                id="enterprisse"
                value="enterprise"
                v-model="user.user_type"
              />
              <label for="tres">Soy dueño de Empresa</label>
            </div>
            <!-- Redes Sociales -->
            <div class="flex m-cols-2 mb-8 border border-b-white"></div>
            <div class="mb-8">
              <div class="flex flex-nowrap">
                <div class="flex justify-center items-center text-gray-muted">
                  <Facebook />
                  <div class="flex justify-center items-center pl-2 mr-2">
                    facebook.com/
                  </div>
                </div>
                <input
                  type="text"
                  name=""
                  id="user_name"
                  class="form-input"
                  v-model="user.facebook_url"
                />
              </div>
            </div>
            <div class="mb-8">
              <div class="flex flex-nowrap">
                <div class="flex justify-center items-center text-gray-muted">
                  <Twitter />
                  <div class="flex justify-center items-center pl-2 mr-2">
                    twitter.com/
                  </div>
                </div>
                <input
                  type="text"
                  name=""
                  id="user_name"
                  class="form-input"
                  v-model="user.twitter_url"
                />
              </div>
            </div>
            <div class="mb-8">
              <div class="flex flex-nowrap">
                <div class="flex justify-center items-center text-gray-muted">
                  <Linkedin />
                  <div class="flex justify-center items-center pl-2 mr-2">
                    linkedin.com/in/
                  </div>
                </div>
                <input
                  type="text"
                  name=""
                  id="user_name"
                  class="form-input"
                  v-model="user.linkedin_url"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="bg-bta-pink text-white px-4 py-2 md:px-5 md:py-2 rounded-md hover:bg-bta-pink/75 transition-transform duration-300 active:scale-90"
              @click.prevent="updateUser()"
            >
              Actualizar Datos
            </button>
          </div>
        </div>
      </section>
    </form>
  </section>
</template>

<script>
import Facebook from "../components/icons/Facebook.vue";
import Twitter from "../components/icons/Twitter.vue";
import Linkedin from "../components/icons/Linkedin.vue";
export default {
  name: "Edit",
  layout: "perfil",
  data() {
    return {
      user: {
        name: this.$auth.user.name,
        lastname: this.$auth.user.lastname,
        avatar_url: this.$auth.user.avatar_url,
        aboutme: this.$auth.user.aboutme,
        headline: this.$auth.user.headline,
        username: this.$auth.user.username,
        email: this.$auth.user.email,
        birthdate: this.$auth.user.birthdate,
        country_id: this.$auth.user.country_id,
        facebook_url: this.$auth.user.facebook_url,
        twitter_url: this.$auth.user.twitter_url,
        linkedin_url: this.$auth.user.linkedin_url,
        user_type: this.$auth.user.user_type,
      },
      countries: [],
    };
  },
  created() {
    this.getCountries();
  },
  // SEO Meta tags
  head() {
    return {
      title: "Cursos online de Hacking Ético - Backtrack Academy",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Backtrack Academy plataforma de cursos online de hacking ético y seguridad informática. Únete gratis y comienza a aprender desde cero con los mejores hackers.",
        },
      ],
    };
  },
  methods: {
    updateUser() {
      this.$axios.patch("api/v1/user/update", this.user).then((res) => {
        console.log(res);
      });
    },
    getCountries() {
      this.$axios.get("api/v1/countries").then((res) => {
        this.countries = res.data;
      });
    },
  },
  components: { Facebook, Twitter, Linkedin },
};
</script>
<style scoped>
.form-input {
  @apply outline-none border-none bg-gray-border rounded py-2 px-4 text-white w-full;
}

.form-textarea {
  @apply outline-none focus:outline-bta-pink/50 border-none bg-gray-border rounded py-2 px-4 text-white w-full h-full;
  min-height: 6em;
  max-height: 6m;
}

@media (min-width: 640px) {
  .m-cols-2 {
    grid-column-end: span 2;
  }
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
