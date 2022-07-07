<template>
  <section class="min-h-screen bg-bta-dark-blue">

    <div class="w-full pt-4 px-8 md:pt-8  lg:px-16">
      <div class="mx-auto text-center md:text-left">

        <h3 class="text-4xl font-semibold text-white font-oswald mb-5">Mi Perfil</h3>
        <div class="flex flex-col md:flex-row justify-center text-center w-full">
          <div class="flex flex-col justify-center ">
            <div class="mb-4 text-center">
              <!-- profile image -->
              <figure class=" relative w-36 h-36 md:w-52 md:h-52 mx-auto ">
                <img :src="user.avatar_url" class="rounded-full object-contain" :alt="user.name">
              </figure>
              <!-- profile underline -->
              <div>
                <a href="/perfil/editar" class="text-blue-500 underline text-base font-bold">Editar perfil</a>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 text-center md:text-left md:pr-12 md:pl-8 lg:pr-14">
            <!-- profile name -->
            <div>
              <h2 class="text-2xl lg:text-3xl font-bold font-oswald mr-2 text-white">
                {{ user.name }} {{ user.lastname}}
              </h2>
            </div>
            <div class="flex items-center justify-center md:justify-start">
              <!-- profile headline -->
              <h3 class="text-lg font-bold font-inconsolata text-gray-muted">
                {{ user.headline }}
              </h3>
              <!-- profile role -->
              <span class="inline-block ml-4 text-white text-base font-inconsolata font-bold capitalize">
                {{ user.role }}</span>
            </div>
            <!-- profile-description -->
            <div class="mt-4 w-full text-white text-base lg:text-lg font-inconsolata">
              {{ user.aboutme }}
            </div>
            <!-- profile-social -->
            <div class="flex justify-center mt-4 md:justify-start">
              <a v-if="user.facebook" :href="'https:/www.facebook.com/' + user.facebook" target="_blank"
                class="text-gray-muted hover:text-bta-pink underline text-base font-bold">
                <Facebook class="mr-2" />
              </a>
              <a v-if="user.linkedin" :href="'https:/www.linkedin.com/' + user.linkedin" target="_blank"
                class="text-gray-muted hover:text-bta-pink underline text-base font-bold">
                <Linkedin class="mr-2" />
              </a>
              <a v-if="user.twitter" :href="'https:/www.twitter.com/' + user.twitter" target="_blank"
                class="text-gray-muted hover:text-bta-pink underline text-base font-bold">
                <Twitter class="mr-2" />
              </a>
            </div>
          </div>

          <div class="w-full lg:w-1/3 md:w-1/4 lg:pl-[8.3333%] text-center ">
            <!-- profile score -->
            <div class="flex flex-col justify-center bg-white/10 mt-6 mb-4 rounded-sm">
              <div class="flex justify-center items-center">
                <div class="pt-2 pb-5 px-4">
                  <div class="text-bta-pink text-2xl font-bold font-oswald">{{ user.ranking }}</div>
                  <div>
                    <span class="text-white">Ranking</span>
                  </div>
                </div>
                <div class="pt-2 pb-5 px-4">
                  <div class="text-white text-2xl font-bold font-oswald">0</div>
                  <div>
                    <span class="text-white">Preguntas</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center">
                <div class="pt-2 pb-5 px-4">
                  <div class="text-white text-2xl font-bold font-oswald">{{ user.minutes_studied }}</div>
                  <div class="text-white">Minutos Estudiados</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="mt-6">
        <div class="flex flex-wrap text-white">
          <div class="px-3 pb-3 relative">
            <NuxtLink :to="'/@' + this.$auth.user.username + '/seguidores'">Seguidores</NuxtLink>
          </div>
          <div class="px-3 pb-3 relative">
            <NuxtLink :to="'/@' + this.$auth.user.username + '/siguiendo'">Siguiendo</NuxtLink>
          </div>
          <div class="px-3 pb-3 relative">
            <NuxtLink :to="'/@' + this.$auth.user.username + '/cursos'">Cursos</NuxtLink>
          </div>
          <div class="px-3 pb-3 relative">
            <NuxtLink :to="'/@' + this.$auth.user.username + '/articulos'">Articulos</NuxtLink>
          </div>
        </div>
        <div>
          <NuxtChild />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Facebook from '../components/icons/Facebook.vue';
import Linkedin from '../components/icons/Linkedin.vue';
import Twitter from '../components/icons/Twitter.vue';
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
                minutes_studied: this.$auth.user.minutes_studied,
                facebook: this.$auth.user.facebook_url,
                linkedin: this.$auth.user.linkedin_url,
                twitter: this.$auth.user.twitter_url,
                role: this.$auth.user.role,
            },
        };
    },
    created() {
        console.log(this.$auth.user);
    },
    // SEO Meta tags
    head() {
        return {
            title: this.user.name + " " + this.user.lastname + " - Backtrack Academy",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.user.name + " " + this.user.lastname + " estudiante de seguridad informatica en la comunidad de Backtrack Academy",
                }
            ]
        };
    },
    components: { Facebook, Linkedin, Twitter }
}
</script>

<style scoped>

/* .sp::after {
  @apply bg-bta-pink/50;
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  opacity: 1;
  width: 100%;
} */
</style>

