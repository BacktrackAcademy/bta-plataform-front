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
</style>
