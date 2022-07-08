<template>
  <section class="min-h-screen bg-bta-blue lg:px-16 py-10">

    <h1 class="text-3xl text-center text-white font-bold font-oswald mt-3 mb-6">
      Editar Perfil
    </h1>

    <form class="w-full max-w-[1400px] mx-auto">
      <section class="w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)] mx-4 py-2">
        <div class="sm:w-3/4 lg:w-1/2 mx-auto flex flex-col gap-4 bg-bta-dark-blue p-6 md:p-8 relative rounded-lg">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="user_name">Nombre de Usuario</label>
              <input
               type="text"
               name=""
               id="user_name"
               placeholder="Nombre de Usuario"
               class="form-input"
               v-model="user.username" />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="titular">Titular</label>
              <input
               type="text"
               name=""
               id="titular"
               placeholder="Titular"
               class="form-input"
               v-model="user.headline" />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="name">Nombre</label>
              <input
               type="text"
               name=""
               id="name"
               placeholder="Nombre"
               class="form-input"
               v-model="user.name" />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="lastname">Apellidos</label>
              <input
               type="text"
               name=""
               id="lastname"
               placeholder="Apellidos"
               class="form-input"
               v-model="user.lastname" />
            </div>
            <div class="flex flex-col mb-8">
              <label class="text-white mb-2" for="email">Correo Electrónico</label>
              <input
               type="text"
               name=""
               id="email"
               placeholder="Correo Electrónico"
               class="form-input"
               v-model="user.email" />
            </div>
            <!-- <div class="flex flex-col">
              <label class="text-white" for="birthdate">Fecha de Nacimiento</label>
              <input
                type="text"
                name=""
                id="birthdate"
                placeholder="Fecha de Nacimiento"
                v-model="user.birthdate"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-white" for="nacionality">Nacionalidad</label>
              <input
                type="text"
                name=""
                id="nacionality"
                placeholder="Nacionalidad"
                v-model="user.country_id"
              />
            </div> -->
            <div class="flex flex-col m-cols-2">
              <label class="text-white mb-2" for="aboutme">Acerca de mi</label>
              <textarea
               type="text"
               name="" id="aboutme"
               placeholder="Acerca de mi"
               class="form-textarea mb-8"
               v-model="user.aboutme" />
            </div>
          </div>
          <div class="flex justify-center">
            <button
             class=" bg-bta-pink text-white px-4 py-2 md:px-5 md:py-2 rounded-md hover:bg-bta-pink/75 transition-transform duration-300 active:scale-90"
             @click.prevent="updateUser()"
            >
              Actualizar Datos
            </button>
          </div>
        </div>
      </section>
    </form>
    <section class="bg-bta-section px-10">
      <h2 class="text-3xl text-white font-oswald font-semibold">Formacion Profesional</h2>
      <form>
      <div class="text-white my-4">
        <div>
          <legend class="font-inconsolata">Nivel de estudios</legend>
        </div>
        <input type="radio" name="nivelEstudios" value="1" v-model="user.nivel_estudios"> Secundaria
        <input type="radio" name="nivelEstudios" value="2" v-model="user.nivel_estudios"> Universidad
      </div>
      <div>
        <h2 class="text-white font-oswald font-medium">Habilidades</h2>
        <v-select multiple v-model="selected" :options="['Canada','United States']" class="v-select"/>
      </div>
      <div>
        <button class="text-white hover:text-gray-muted font-inconsolata">Agregar Educación</button>
        <div class="text-white">
          <div class="flex justify-between text-white text-xl font-oswald">
            <p>Educación</p>
            <button>Eliminar</button>
          </div>
          <div>
            <div class="mb-3">
              <label for="">Seleccione Universidad, Instituto u otra Academia. </label>
              <input type="text" placeholder="ej. Universidad Pontificia">
            </div>
            <div class="mb-3">
              <label for="">Grado, Licenciatura ó diplamado</label>
              <datalist id="degree">
                <option value="">Ingeniería en Computación</option>
              </datalist>
            </div>

          </div>

        </div>
      </div>
      <div>
        <button class="bg-bta-pink px-4 py-2 text-white text-xl font-oswald font-medium">Actualizar</button>
      </div>
    </form>
    </section>

  </section>
</template>

<script>
export default {
  name: "Edit",

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
      },
    };
  },
  methods: {
    updateUser() {
      this.$axios.patch("api/v1/user/update", this.user).then((res) => {
        console.log(res);
      });
    },
  },

    // SEO Meta tags
  head() {
    return {
      title: "Cursos online de Hacking Ético - Backtrack Academy",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Backtrack Academy plataforma de cursos online de hacking ético y seguridad informática. Únete gratis y comienza a aprender desde cero con los mejores hackers.",
        }
      ]
    }
  },
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

@media(min-width: 640px) {
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
  --vs-controls-color: #EC1075;
  --vs-search-input-color: #070916;
}
</style>
