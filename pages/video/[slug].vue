<script setup lang="ts">
import ArrowToRight from '../../components/icons/arrow-to-right.vue'

definePageMeta({
  layout: 'custom',
  auth: true,
})

interface Teacher {
  id: number
  name: string
  lastname: string
  avatar_url: string
}

interface Video {
  id: number
  titlevideo: string
  url: string
  slug: string
  is_free: boolean
}

interface Theme {
  id: number
  titulo: string
  videos: Video[]
}

interface Course {
  id: number
  titulo: string
  slug: string
  descripcion: string
  image_thumb: string
  teacher: Teacher
  syllabus: Theme[]
}

// Route
const route = useRoute()

// Estados reactivos
const video = ref<Video | null>(null)
const course = ref<Course | null>(null)
const teacher = ref<Teacher | null>(null)
const syllabus = ref<Theme[]>([])

// Cargar datos del video
async function loadVideoData() {
  try {
    const { data } = await useFetch<any>(`/api/v1/video/${route.params.slug}`)
    if (data.value) {
      video.value = data.value
      course.value = data.value.course
      teacher.value = data.value.course.teacher
      syllabus.value = data.value.course.syllabus
    }
  }
  catch (error) {
    console.error('Error al cargar el video:', error)
  }
}

// Cargar datos al montar el componente
onMounted(() => {
  loadVideoData()
})

// SEO Metadata
useSeoMeta({
  title: () => course.value?.titulo ? `${course.value.titulo} - Backtrack Academy` : 'Backtrack Academy',
  description: () => course.value?.descripcion || 'Únete gratis y comienza a aprender seguridad informática desde cero con los mejores hackers.',
  keywords: 'Gratis, Hacking, Wireshark, Hacker, Python, Android, Informática, Seguridad, Academy, Online, Cursos, JavaScript',
  ogType: 'website',
  ogUrl: () => `https://backtrackacademy.com/video/${route.params.slug}`,
  ogTitle: () => course.value?.titulo ? `${course.value.titulo} - Backtrack Academy` : 'Backtrack Academy - Videos de Hacking Ético',
  ogDescription: () => course.value?.descripcion || 'Únete gratis y comienza a aprender seguridad informática desde cero con los mejores hackers.',
  ogImage: 'https://backtrack-academy-01.s3.amazonaws.com/OpenGraph+Facebook.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <section class="bg-bta-dark-blue px-4 sm:px-6 xl:px-8">
    <div class="lg:flex mt-2 gap-6 xl:gap-8">
      <div class="lg:w-[70%]">
        <!-- Video player -->
        <div class="relative top-0 max-h-[calc(100vh - 52px)] mx-auto">
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              v-if="video?.url"
              :src="`https://player.vimeo.com/video/${video.url}?h=0eb117b38a&title=0&byline=0&portrait=0&badge=0`"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>

        <div>
          <!-- curso Header -->
          <div class="flex items-center justify-between">
            <div class="flex items-center pt-4">
              <!-- Curso image thumb -->
              <img
                v-if="course?.image_thumb"
                :src="course.image_thumb"
                alt=""
                class="mr-3 w-12 h-12 rounded-full"
              >
              <!-- header content -->
              <div class="flex flex-wrap">
                <NuxtLink
                  v-if="course?.slug"
                  :to="`/curso/${course.slug}`"
                  class="block w-full"
                >
                  <h2 class="text-white font-normal text-base">
                    {{ course?.titulo }}
                  </h2>
                </NuxtLink>
                <img
                  v-if="teacher?.avatar_url"
                  :src="teacher.avatar_url"
                  alt=""
                  class="w-6 h-6 rounded-full mr-1"
                >
                <p class="text-gray-muted">
                  {{ teacher?.name }} {{ teacher?.lastname }}
                </p>
              </div>
            </div>

            <div>
              <button class="flex items-center bg-bta-pink text-white hover:bg-bta-pink/90 px-3 py-2 w-[144px] rounded-[8px] mr-2">
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
                {{ video?.titlevideo }}
              </h1>
              <span class="text-[#cacaca] ml-3">1/20</span>
            </div>
          </div>

          <div class="text-white">
            <h3 class="mb-1 font-inconsolata font-semibold">
              Resumen del curso
            </h3>
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
          <p class="font-inconsolata">
            Has estudiado
          </p>
          <p class="font-oswald font-medium text-6xl mb-3">
            0%
          </p>
          <p class="font-inconsolata">
            del curso <span class="text-white">Threat Hunting</span>
          </p>
          <br>
          <p class="font-inconsolata">
            Tienes 3 oportunidades
          </p>
        </div>
        <!-- Temario -->
        <div>
          <h4 class="text-2xl text-white font-oswald font-medium mt-5 mb-2">
            Temario
          </h4>
          <div
            v-for="(theme, i) in syllabus"
            :key="theme.titulo + i"
            class="mb-3"
          >
            <h3 class="text-gray-100 font-inconsolata py-2">
              {{ theme.titulo }}
            </h3>
            <div v-for="(video, i) in theme.videos" :key="video.slug + i">
              <NuxtLink
                v-if="video.is_free"
                class="flex gap-x-3 p-2 rounded hover:bg-bta-blue"
                :to="`/video/${video.slug}`"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-white h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div>
                  <span class="text-white font-inconsolata">{{ video.titlevideo }}</span>
                </div>
              </NuxtLink>
              <div v-else class="flex gap-x-3 p-2 rounded hover:bg-bta-blue">
                <span>
                  <!-- Lock icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-white h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
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
