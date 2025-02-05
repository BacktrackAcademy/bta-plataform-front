<script setup lang="ts">
// import { useSeoMeta } from '#app'
import { useRoute } from 'vue-router'

definePageMeta({
  layout: 'custom',
  middleware: 'auth', // Asociar el middleware de autenticación
})

interface Teacher {
  id: number
  name: string
  avatar?: string
}

interface SyllabusItem {
  id: number
  title: string
  description: string
}

interface Course {
  id: number
  titulo: string
  descripcion: string
  wallpaper_thumb: string
  metatag: string
  stars_evaluation: number
  teacher: Teacher
  syllabus: SyllabusItem[]
}

const route = useRoute()
const { data: course } = await useAPI<Course>(`/course/${route.params.slug}`)

// const starsBlank = computed(() => 5 - (course.value?.stars_evaluation || 0))

// SEO Metadata
// useSeoMeta({
//   title: () => `${course.value?.titulo} - Backtrack Academy`,
//   description: () => course.value?.descripcion || '',
//   keywords: () => course.value?.metatag || '',
//   ogType: 'website',
//   ogUrl: 'https://backtrackacademy.com/',
//   ogTitle: () => course.value?.titulo || 'Backtrack Academy',
//   ogDescription: () => course.value?.descripcion || '',
//   ogImage: () => course.value?.wallpaper_thumb || '',
// })
</script>

<template>
  <div>
    <div class="bg-bta-dark-blue">
      <!-- Hero base -->
      <div
        class="flex gap-32 py-8 bg-bta-dark-blue min-h-[400px] mx-auto p-5 text-white rounded max-w-[1280px] w-full"
      >
        <div class="w-2/3">
          <h1 class="font-oswald font-bold text-4xl lg:text-5xl mb-8 uppercase">
            {{ course.titulo }}
          </h1>
          <div class="extra-info flex items-center flex-wrap gap-3">
            <NuxtLink :to="`/curso/${course.slug}/comentarios/`" class="group">
              <div class="mr-2 flex items-center">
                <div v-for="(i) in course.stars_evaluation" :key="`${i}starEvaluation`">
                  <svg
                    aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                    class="inline-block h-4 overflow-visible mr-2 fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="#fddd5b"
                      d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                    />
                  </svg>
                </div>
                <div v-for="(i) in stars_blank" :key="`${i}starBlank`">
                  <svg
                    aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                    class="inline-block h-4 overflow-visible mr-2 fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                    />
                  </svg>
                </div>
                <div class="sm:mx-4">
                  <p class="text-cyan-300 group-hover:underline underline-offset-2 font-inconsolata">
                    {{ course.count_evaluation }} Opiniones
                  </p>
                </div>
              </div>
            </NuxtLink>
            <div class="flex items-center justify-center border border-gray-muted rounded-lg mr-2 px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 23 21">
                <g id="Rectángulo_1" data-name="Rectángulo 1" transform="translate(0 12)" fill="#EC1075">
                  <rect width="5" height="9" stroke="none" />
                  <rect x="0.5" y="0.5" width="4" height="8" fill="none" />
                </g>
                <g
                  id="Rectángulo_2" data-name="Rectángulo 2" transform="translate(6 8)" fill="#EC1075"
                  :fill-opacity="course.level_name == 'Intermedios' || course.level_name == 'Avanzados' || course.level_name == 'Experto' ? 'none' : '0.2'"
                >
                  <rect width="5" height="13" stroke="none" />
                  <rect x="0.5" y="0.5" width="4" height="12" fill="none" />
                </g>
                <g
                  id="Rectángulo_3" data-name="Rectángulo 3" transform="translate(12 4)" fill="#EC1075"
                  :fill-opacity="course.level_name == 'Avanzados' || course.level_name == 'Experto' ? 'none' : '0.2'"
                >
                  <rect width="5" height="17" stroke="none" />
                  <rect x="0.5" y="0.5" width="4" height="16" fill="none" />
                </g>
                <g
                  id="Rectángulo_4" data-name="Rectángulo 4" transform="translate(18)" fill="#EC1075"
                  :fill-opacity="course.level_name == 'Experto' ? 'none' : '0.2'"
                >
                  <rect width="5" height="21" stroke="none" />
                  <rect x="0.5" y="0.5" width="4" height="20" fill="none" />
                </g>
              </svg>
              <p class="font-medium uppercase ml-2 text-xs xl:text-base font-inconsolata">
                {{ course.level_name }}
              </p>
            </div>
          </div>
          <!-- <p>{{ teacher.name }}</p> -->
          <p class="mt-4 text-base font-inconsolata mb-3">
            {{ course.descripcion }}
          </p>
        </div>
        <div class="w-1/3">
          <p class="font-inconsolata text-sm">
            Consíguelo
          </p>
          <p v-if="course.price" class="font-oswald text-4xl font-medium mb-3">
            {{ course.price }} USD
          </p>
          <p v-else class="font-oswald text-4xl font-medium mb-3">
            GRATIS
          </p>
          <Button to="/" class="bg-bta-pink text-white font-inconsolata">
            Comprar suscripción mensual
          </Button>
          <p v-if="course.price" class="font-inconsolata text-white text-sm pt-3">
            Puedes comprar el curso por: {{ course.price }} USD
          </p>
          <p v-else class="font-inconsolata text-white text-sm pt-3">
            ¡Es absolutamente gratis!
          </p>
        </div>
      </div>
    </div>

    <!-- Temario -->
    <section class="bg-bta-section">
      <div class="px-4">
        <h2 class="font-oswald font-bold text-white text-4xl my-14 mx-auto max-w-5xl">
          Temario
        </h2>
        <div v-for="(theme, i) in course.syllabus" :key="i + 1000" class="bg-bta-section mx-auto max-w-5xl">
          <h3 class="font-oswald text-white text-3xl font-bold my-4">
            {{ theme.titulo }}
          </h3>
          <p class="flex gap-2 font-inconsolata text-gray-muted">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            {{ theme.lessons }} lecciones
          </p>

          <div
            v-for="(video, i) in theme.videos" :key="i + 2000"
            class="flex gap-2 items-center hover:bg-bta-dark-blue rounded-lg relative"
          >
            <div v-if="video.is_free || course.price == null || course.price == 0" class="text-white w-full">
              <NuxtLink :to="`/video/${video.slug}`">
                <div class="flex flex-row items-center gap-2 p-6 font-inconsolata">
                  <!-- play icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2"
                  >
                    <path
                      stroke-linecap="round" stroke-linejoin="round"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p class="text-white">
                      {{ video.titlevideo }}
                    </p>
                  </div>
                  <div class="flex items-center gap-3 ml-auto flex-shrink-0 w-20">
                    <div class="text-bta-pink">
                      <!-- clock icon -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2"
                      >
                        <path
                          stroke-linecap="round" stroke-linejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p class="text-white">
                      {{ video.total }}
                    </p>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div v-else class="text-white w-full">
              <NuxtLink :to="`/curso/${course.slug}`">
                <div class="flex flex-row items-center gap-2 p-6">
                  <!-- Lock icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="">
                    <p class="text-white font-inconsolata">
                      {{ video.titlevideo }}
                    </p>
                  </div>
                  <div class="flex items-center gap-3 ml-auto flex-shrink-0 w-20">
                    <div class="text-bta-pink">
                      <!-- clock icon -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2"
                      >
                        <path
                          stroke-linecap="round" stroke-linejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p class="text-white">
                      {{ video.total }}
                    </p>
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

<style>

</style>
