<template>
  <section class="min-h-screen bg-bta-section px-16 py-10">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col">
        <label class="text-white" for="user_name">Nombre de Usuario</label>
        <input
          type="text"
          name=""
          id="user_name"
          placeholder="Nombre de Usuario"
          v-model="user.username"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-white" for="titular">Titular</label>
        <input
          type="text"
          name=""
          id="titular"
          placeholder="Titular"
          v-model="user.headline"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-white" for="name">Nombre</label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="Nombre"
          v-model="user.name"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-white" for="lastname">Apellidos</label>
        <input
          type="text"
          name=""
          id="lastname"
          placeholder="Apellidos"
          v-model="user.lastname"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-white" for="email">Correo Electrónico</label>
        <input
          type="text"
          name=""
          id="email"
          placeholder="Correo Electrónico"
          v-model="user.email"
        />
      </div>
      <div class="flex flex-col">
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
      </div>
      <div class="flex flex-col">
        <label class="text-white" for="aboutme">Acerca de mi</label>
        <textarea
          type="text"
          name=""
          id="aboutme"
          placeholder="Acerca de mi"
          v-model="user.aboutme"
        />
      </div>
    </div>
    <button class=" bg-bta-pink text-white" @click.prevent="updateUser()">Actualizar Datos</button>
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
