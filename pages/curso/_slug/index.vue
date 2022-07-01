<template>
  <div>
    <div class="hero bg-bta-dark-blue relative">
      <!-- Hero background -->

      <!-- Hero base -->
      <div
        class="hero-base bg-bta-dark-blue min-h-[300px] mx-auto p-5 text-white rounded grid max-w-[1280px] relative w-full">

        <!-- hero teacher -->
        <figure class=" h-full py-[53px] px-2">
          <img :src="teacher.avatar_url" class="" />
        </figure>
        <!-- hero content -->
        <div class="hero-content">
          <p class="font-inconsolata text-sm">Curso</p>
          <h1 class="font-oswald font-bold text-5xl mb-3">{{ course.titulo }}</h1>
          <div class="extra-info flex items-center">
            <NuxtLink :to="'/curso/' + course.slug + '/comentarios/'">
              <div class="mr-2 flex items-center">
                <div v-for="(i) in course.stars_evaluation" :key="i+'starEvaluation'">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                    class="inline-block h-4 overflow-visible mr-2 fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path fill="#fddd5b"
                      d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z">
                    </path>
                  </svg>
                </div>
                <div v-for="(i) in stars_blank" :key="i+'starBlank'">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                    class="inline-block h-4 overflow-visible mr-2 fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path fill="currentColor"
                      d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z">
                    </path>
                  </svg>
                </div>
                <div class="mx-4">
                  <p class="text-cyan-400">{{ course.count_evaluation }} Opiniones </p>
                </div>
              </div>
            </NuxtLink>
            <div class="flex items-center justify-center border border-gray-muted rounded-lg mr-2 px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 23 21">
                <g id="Rectángulo_1" data-name="Rectángulo 1" transform="translate(0 12)" fill="#EC1075">
                  <rect width="5" height="9" stroke="none" />
                  <rect x="0.5" y="0.5" width="4" height="8" fill="none" />
                </g>
                <g id="Rectángulo_2" data-name="Rectángulo 2" transform="translate(6 8)" fill="#EC1075"
                  :fill-opacity="course.level_name == 'Intermedios' || course.level_name == 'Avanzados' || course.level_name == 'Experto' ? 'none' : '0.2'">
                  <rect width="5" height="13" stroke="none" />
                  <rect x="0.5" y="0.5" width="4" height="12" fill="none" />
                </g>
                <g id="Rectángulo_3" data-name="Rectángulo 3" transform="translate(12 4)" fill="#EC1075"
                  :fill-opacity="course.level_name == 'Avanzados' || course.level_name == 'Experto' ? 'none' : '0.2'">
                  <rect width="5" height="17" stroke="none" />
                  <rect x="0.5" y="0.5" width="4" height="16" fill="none" />
                </g>
                <g id="Rectángulo_4" data-name="Rectángulo 4" transform="translate(18)" fill="#EC1075"
                  :fill-opacity="course.level_name == 'Experto' ? 'none' : '0.2'">
                  <rect width="5" height="21" stroke="none" />
                  <rect x="0.5" y="0.5" width="4" height="20" fill="none" />
                </g>
              </svg>
              <p class="font-medium uppercase pt-[2px] ml-2 text-base"> {{ course.level_name }}</p>
            </div>
          </div>
          <p>{{ teacher.name }}</p>
          <p class="mt-4 text-lg">{{ course.descripcion }}</p>
          <NuxtLink to="/cursos" class="">Regresar a cursos</NuxtLink>
        </div>
        <div class="pt-[53px]">
          <p class="font-inconsolata text-sm">Consíguelo</p>
          <p v-if="course.price" class="font-oswald text-4xl font-medium mb-3">{{ course.price }} USD</p>
          <p v-else class="font-oswald text-4xl font-medium mb-3"> GRATIS</p>
          <NuxtLink to="/" class="btn-bta"> Comprar suscripción mensual</NuxtLink>
          <p v-if="course.price" class="font-inconsolata text-white text-sm pt-3">
            Puedes comprar el curso por: {{ course.price }} USD
          </p>
          <p v-else class="font-inconsolata text-white text-sm pt-3">¡Es absolutamente gratis!</p>
        </div>
      </div>
    </div>

    <!-- Temario -->
    <section class="bg-bta-section">
      <div class="px-4">
        <h2 class="font-oswald font-bold text-white text-4xl text-center mb-14">
          Temario del Curso de {{ course.titulo }}
        </h2>
        <div v-for="(theme, i) in syllabus" :key="i + 1000" class="bg-bta-section mx-auto max-w-5xl">
          <h3 class="font-oswald text-white text-3xl font-bold my-10">{{ theme.titulo }}</h3>

          <div v-for="(video, i) in theme.videos" :key="i + 2000"
            class="flex gap-2 items-center hover:bg-bta-dark-blue rounded-lg relative">

            <div v-if="video.is_free" class="text-white w-full">
              <NuxtLink :to="'/video/'+ video.slug">
              <div class="flex flex-row items-center gap-2 p-6">
                <!-- play icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="">
                  <p class="text-white"> {{ video.titlevideo }} </p>
                </div>
                <div class="flex items-center gap-3 ml-auto flex-shrink-0 w-20">
                  <div class="text-bta-pink">
                    <!-- clock icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p class="text-white"> {{ video.total }}</p>
                </div>
              </div>
              </NuxtLink>
            </div>

            <div v-else class="text-white w-full">
              <NuxtLink :to="'/curso/' + course.slug">
                <div class="flex flex-row items-center gap-2 p-6">
                  <!-- Lock icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <div class="">
                    <p class="text-white"> {{ video.titlevideo }} </p>
                  </div>
                  <div class="flex items-center gap-3 ml-auto flex-shrink-0 w-20">
                    <div class="text-bta-pink">
                      <!-- clock icon -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p class="text-white"> {{ video.total }}</p>
                  </div>
                </div>
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'courseIndvPage',

  data() {
    return {
      course: {},
      teacher: {},
      syllabus: [],
      stars_blank: 0,
    }
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get("/api/v1/course/" + params.slug);
    return {
      course: data,
      teacher: data.teacher,
      syllabus: data.syllabus
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
        { hid: "og-site_name", property: "og:site_name", content: "Backtrack Academy" },
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
          content: this.course.wallpaper_thumb,
        },
        // description
        {
          hid: "description",
          name: "description",
          content: this.course.descripcion,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.course.metatag,
        },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    };
  },
  created() {
    this.calcStars(this.course.stars_evaluation)
  },
  methods: {
    calcStars(stars) {
      this.stars_blank = 5 - stars
    },
  },
}
</script>

<style>
.btn-bta {
  @apply text-base px-5 py-4 font-oswald uppercase text-white bg-bta-pink border border-bta-pink inline-block mb-0 font-normal text-center align-middle whitespace-nowrap duration-200
}

.hero-base {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1200px;
  padding: 28px 16px;
  position: relative;
  width: 100%;
}

@media (min-width: 1024px) {
  .hero-base {
    background: 0 0;
    grid-template-columns: 3fr 7fr 1fr;
    margin-top: 0;
    padding: 0;
  }

  .hero-content {
    padding: 53px 8px 53px 5rem;
    width: calc(70% - -8rem);
  }
}
</style>