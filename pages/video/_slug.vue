<template>
  <section class="bg-bta-dark-blue px-4 sm:px-6 xl:px-8">
    <div class="lg:flex mt-2 gap-6 xl:gap-8">
      <div class="lg:w-[70%]">
        <!-- Video player -->
        <div
          class="relative top-0 max-h-[calc(100vh - 52px)] mx-auto"
        >
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              :src="'https://player.vimeo.com/video/'+ video.url +'?h=0eb117b38a&title=0&byline=0&portrait=0&badge=0'"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div>
          <!-- curso Header -->
          <div class="flex items-center justify-between">
            <div class="flex items-center pt-4">
              <!-- Curso image thumb -->
              <img
                :src="course.image_thumb"
                alt=""
                class="mr-3 w-12 h-12 rounded-full"
              />
              <!-- header content -->
              <div class="flex flex-wrap">
                <nuxt-link :to="'/curso/' + course.slug" class="block w-full">
                  <h2 class="text-white font-normal text-base">
                    {{ course.titulo }}
                  </h2>
                </nuxt-link>
                <img
                  :src="teacher.avatar_url"
                  alt=""
                  class="w-6 h-6 rounded-full mr-1"
                />
                <p class="text-gray-muted">{{ teacher.name }} {{ teacher.lastname}}</p>
              </div>
            </div>

            <div>
              <button
                class="flex items-center bg-bta-pink text-white hover:bg-bta-pink/90 px-3 py-2 w-[144px] rounded-[8px] mr-2"
              >
                <ArrowToRight class="mr-3" />
                <span
                  class="uppercase text-left text-sm font-bold w-[137px] text-ellipsis whitespace-nowrap overflow-hidden"
                  title="Definición y características de Cobalt Strike"
                >
                  Definición y características de Cobalt Strike
                </span>
              </button>
            </div>
          </div>

          <div class="pt-2 flex justify-between">
            <!-- header class -->
            <div class="flex items-center">
              <h1 class="text-2xl text-white font-bold leading-9 my-4 font-oswald">
                {{ video.titlevideo }}
              </h1>
              <span class="text-[#cacaca] ml-3">1/20</span>
            </div>
            <div>soy bandera</div>
          </div>

          <div class="text-white">
            <h3 class="mb-1 font-inconsolata font-semibold">Resumen del curso</h3>
            <div class="flex flex-wrap gap-3 font-inconsolata mb-2">
              <strong>01:40 hrs</strong>
              <div>84 personas han estudiado este curso.</div>
            </div>
            <p class="font-inconsolata">
              Los ciberdelincuentes son cada vez más astutos y capaces de evadir los sistemas de defensa más sofisticados. Por eso debemos ser proactivos a través de nuestras redes para detectar y aislar amenazas avanzadas que puedan evadir nuestros sistemas de defensa.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:w-[30%]">
        <!-- badge -->
        <div class="text-[#cacaca] text-center mb-5">
          <p class="font-inconsolata">Has estudiado</p>
          <p class="font-oswald font-medium text-6xl mb-3">0%</p>
          <p class="font-inconsolata">
            del curso <span class="text-white">Threat Hunting</span>
          </p>
          <br />
          <p class="font-inconsolata">Tienes 3 oportunidades</p>
        </div>
        <!-- Temario -->
        <div>
          <h4 class="text-2xl text-white font-oswald font-medium mt-5 mb-2">
            Temario
          </h4>
          <div v-for="(theme, i) in syllabus" :key=" theme.titulo+ i" class="mb-3">
            <h3
              class="text-gray-100 font-inconsolata py-2"
            >
              {{ theme.titulo }}
            </h3>
            <div v-for="(video, i) in theme.videos" :key="video.slug + i">
              <NuxtLink
                class="flex gap-x-3 p-2 rounded hover:bg-bta-blue"
                :to="'/video/'+ video.slug"
                v-if="video.is_free"
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class=" text-white h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <span class="text-white font-inconsolata">{{ video.titlevideo }}</span>
                </div>
              </NuxtLink>
              <div v-else class="flex gap-x-3 p-2 rounded hover:bg-bta-blue">
                <span>
                  <!-- Lock icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
                <div>
                  <span class="text-white font-inconsolata">
                    {{ video.titlevideo }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import ArrowToRight from '../../components/icons/arrow-to-right.vue';
export default {
  components: {
    ArrowToRight
  },
  data() {
    return {
      course: {},
      syllabus: [],
      videos: [],
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get("/api/v1/video/" + params.slug)
    return {
      video: data,
      course: data.course,
      teacher: data.course.teacher,
      syllabus: data.course.syllabus,
    };
  },
  head() {
    return {
      title: this.course.titulo + " - Bactrack Academy",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        // open graph
        {
          hid: "og-site_name",
          property: "og:site_name",
          content: "Backtrack Academy",
        },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: this.course.titulo,
        },
        {
          hid: "og-desc",
          property: "og:description",
          content: this.course.descripcion,
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://cymasuite.com/preview.png",
        },
        // description
        {
          hid: "description",
          name: "description",
          content: this.course.descripcion,
        },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    };
  },
};
</script>
