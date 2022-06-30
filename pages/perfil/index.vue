<template>
  <section class="min-h-screen bg-bta-section">

    <div class="container mx-auto px-2 md:px-10 xl:px-20 w-full">

      <div class="w-full pt-7 pb-12">
        <h3 class="text-4xl font-semibold text-white font-oswald">Mi Perfil</h3>
      </div>

      <div class="flex-col flex md:flex-row gap-2 sm:gap-4 lg:gap-10">
        <!-- profile image -->
        <div class="rounded w-1/2 md:w-1/4 mx-auto ">
          <div class="w-40 h-40 md:w-56 md:h-56 ">
            <img :src="user.avatar_url" class="rounded-full object-contain" :alt="user.name">
          </div>
        </div>

        <div class="md:w-3/4 mx-auto text-white flex items-center">
          <div class="px-4">
            <div class="flex items-center">
              <!-- profile name -->
              <h2 class="m-0 text-4xl font-semibold font-oswald mb-3 pr-4">
                {{ user.name }} {{ user.lastname}}
              </h2>
              <nuxt-link to="/perfil/editar">
                <button class="btn">Editar</button>
              </nuxt-link>
            </div>
            <!-- profile-description -->
            <div class="text-base pt-3 text-gray-400 font-inconsolata"> 
              {{ user.aboutme}}
            </div>

          </div>
        </div>

      </div>
      <div class="mt-6 font-medium text-lg text-white">
        <div class="flex flex-wrap">
          <div class="px-3 pb-3 relative">
            <span>Ranking</span>
            <div>{{ user.ranking }}</div>
          </div>
          <div class="px-3 pb-3 relative">
            <span>Cursos</span>
          </div>
          <div class="px-3 pb-3 relative">
             <span>Preguntas</span>
          </div>
          <div class="px-3 pb-3 relative">
            <span>Seguidores</span>
            <div>{{ user.number_followers}}</div>
          </div>
          <div class="px-3 pb-3 relative">
            <span>Siguiendo</span>
            <div>{{ user.number_followeds }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
        avatar_url: this.$auth.user.avatar_url,
        ranking: this.$auth.user.ranking,
        number_followers: this.$auth.user.number_followers,
        number_followeds: this.$auth.user.number_followeds,
      },
    };
  },

  // SEO Meta tags
  head() {
    return {
      title: this.user.name + " " + this.user.lastname + " - Backtrack Academy",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.user.name + " " + this.user.lastname + " estudiante de seguridad informatica en la comunidad de Backtrack Academy",
        }
      ]
    }
  },
}
</script>

<style scoped>
.btn {
  @apply px-3 py-2 md:px-5 md:py-3 text-white bg-bta-pink font-oswald text-xs md:text-base font-normal  leading-snug hover:bg-bta-pink/75 active:scale-95;
}
span::after {
  @apply bg-bta-pink/50;
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  opacity: 1;
  width: 100%;
}
</style>

