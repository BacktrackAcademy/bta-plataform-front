<script setup lang="ts">
import { apiFetch } from '@/utils/api'
import { Skeleton } from '~/components/ui/skeleton'

definePageMeta({
  layout: 'custom',
  middleware: 'auth', // Asociar el middleware de autenticación
})

interface Teacher {
  id: number
  name: string
  lastname: string
  number_courses: number
}

interface Level {
  id: number
  name: string
  number_courses: number
}

interface Category {
  id: number
  name: string
  number_courses: number
}

interface Course {
  id: number
  titulo: string
  slug: string
  shortdes: string
  image_thumb: string
  price: number
  total_length: string
  teacher: Teacher
}

interface CoursesHistory {
  number_courses: number
  progress_percentage: number
  total_length: string
  total_viewed: string
}

// Estados reactivos para filtros
const query = ref('')
const isLoading = ref(true)
const awaitingSearch = ref(false)
const user_ids = ref<number[]>([])
const level_ids = ref<number[]>([])
const category_ids = ref<number[]>([])
const coursesHistory = ref<CoursesHistory | null>(null)

// Estados para almacenar datos
const courses = ref<Course[]>([])
const teachers = ref<Teacher[]>([])
const levels = ref<Level[]>([])
const categories = ref<Category[]>([])

// Función para formatear las horas de manera redondeada
function formatTime(timeString: string | undefined): string {
  if (!timeString)
    return '0'

  const [hours, minutes] = timeString.split(':')
  const totalHours = Math.round(Number.parseInt(hours) + Number.parseInt(minutes) / 60)

  return `${totalHours}`
}

async function getCourses() {
  isLoading.value = true
  try {
    const data = await apiFetch('/courses')
    courses.value = data
  }
  catch (error: any) {
    console.error('Error fetching courses:', error?.message)
  }
  finally {
    isLoading.value = false
  }
}

async function getTeachers() {
  const data = await apiFetch('/teacher')
  teachers.value = data
}

async function getLevels() {
  const data = await apiFetch('/level')
  levels.value = data
}

// Fetch categories using the helper
async function getCategories() {
  try {
    const data = await apiFetch('/category')
    categories.value = data
  }
  catch (error: any) {
    console.error('Error fetching categories:', error.message)
  }
}

async function getCoursesHistory() {
  try {
    const data = await apiFetch('/courses/history')
    coursesHistory.value = data
  }
  catch (error: any) {
    console.error('Error fetching courses history:', error.message)
  }
}

watch(query, () => {
  if (!awaitingSearch.value) {
    setTimeout(() => {
      getCourses()
      awaitingSearch.value = false
    }, 1000)
  }
  awaitingSearch.value = true
})

// Watch para los filtros de selección múltiple
watch([level_ids, category_ids, user_ids], () => {
  getCourses()
}, { deep: true })

// Cargar datos iniciales
onMounted(() => {
  try {
    Promise.all([
      getCourses(),
      getTeachers(),
      getLevels(),
      getCategories(),
      getCoursesHistory(),
    ])
  }
  catch (error) {
    console.error('Error al cargar los datos iniciales:', error)
  }
})

// SEO Metadata
useSeoMeta({
  title: 'Cursos de Hacking Ético',
  description: 'Únete gratis y comienza a aprender seguridad informática desde cero con los mejores hackers.',
  keywords: 'Gratis, Hacking, Wireshark, Hacker, Python, Android, Informática, Seguridad, Academy, Online, Cursos, JavaScript',
  ogType: 'website',
  ogUrl: 'https://backtrackacademy.com/',
  ogTitle: 'Backtrack Academy - Cursos online de Hacking Ético',
  ogDescription: 'Únete gratis y comienza a aprender seguridad informatica desde cero con los mejores hackers.',
  ogImage: 'https://backtrack-academy-01.s3.amazonaws.com/OpenGraph+Facebook.png',
})
</script>

<template>
  <div class="w-full sm:px-6 py-5 px-4">
    <div class="lg:h-full max-w-6xl mx-auto">
      <h1 class="text-white text-3xl font-oswald font-semibold mb-5">
        Cursos de hacking ético
      </h1>

      <!-- Sección de widget "mis cursos" -->
      <div v-if="isLoading" class="max-w-sm bg-[#1A1D24] rounded-xl shadow-lg p-6 relative overflow-hidden">
        <div class="flex items-center gap-4 mb-6">
          <Skeleton class="w-12 h-12 rounded-full" />
          <div class="space-y-2">
            <Skeleton class="h-5 w-24" />
            <Skeleton class="h-4 w-32" />
          </div>
        </div>
        <div class="space-y-2">
          <Skeleton class="h-2 w-full rounded-full" />
          <div class="flex justify-end">
            <Skeleton class="h-4 w-20" />
          </div>
        </div>
      </div>
      <div v-else class="max-w-sm bg-[#1A1D24] rounded-xl shadow-lg p-6 relative overflow-hidden">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700">
            <img
              src="https://ui-avatars.com/api/?background=1A1D24&color=fff"
              alt="Profile"
              class="w-full h-full object-cover"
            >
          </div>
          <div>
            <h2 class="text-lg font-bold text-white">
              Mis Cursos
            </h2>
            <div class="text-gray-400 text-sm">
              <span class="font-medium">{{ coursesHistory?.number_courses }} cursos</span> - Ruta Personalizada
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full bg-gradient-to-r from-bta-pink to-rose-500 transition-all duration-500 ease-out"
              :style="{ width: `${coursesHistory?.progress_percentage}%` }"
            />
          </div>
          <div class="mt-2 flex justify-between items-center text-sm">
            <span v-if="coursesHistory?.progress_percentage" class="text-bta-pink font-medium">
              {{ Math.round(coursesHistory.progress_percentage) }}%
            </span>
            <div class="flex gap-1 ml-auto">
              <span class="text-gray-400">
                {{ formatTime(coursesHistory?.total_viewed) }}
              </span>
              <span class="text-gray-400">
                de
              </span>
              <span class="text-gray-400">
                {{ formatTime(coursesHistory?.total_length) }} horas
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de cursos -->
      <template v-if="isLoading">
        <div class="grid place-items-center min-h-[calc(100vh-400px)]">
          <div class="flex flex-col items-center">
            <IconsSpinner class="text-white" />
            <p class="text-white font-inconsolata text-center mt-2">
              Cargando cursos...
            </p>
          </div>
        </div>
      </template>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 pb-10 mt-8">
        <div v-for="(course, i) in courses" :key="i" class="flex justify-center">
          <div class="w-full max-w-[300px] h-full shadow-lg shadow-bta-dark-blue/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <NuxtLink
              :to="`/curso/${course.slug}`"
              class="focus-visible:outline-2 focus-visible:outline-bta-pink focus-visible:outline-offset-2 group"
            >
              <div class="flex flex-col h-full bg-[#1A1D24]  hover:bg-[#1e2229] rounded-lg overflow-hidden transition-colors duration-300 ease-in-out">
                <!-- Image -->
                <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                  <img
                    class="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                    :src="course.image_thumb"
                    width="320"
                    height="180"
                    :alt="course.titulo"
                    loading="lazy"
                  >
                </figure>
                <!-- Card Content -->
                <div class="flex-grow flex flex-col p-5">
                  <!-- Card body -->
                  <div class="flex-grow">
                    <!-- Header -->
                    <header class="mb-1">
                      <div class="glitch-parent">
                        <h3 class="text-2xl font-bold leading-tight font-oswald text-white glitch" :data-text="course.titulo">
                          {{ course.titulo }}
                        </h3>
                      </div>
                      <div class="mt-2">
                        <p class="text-gray-300 font-inconsolata">
                          {{ course.teacher.name }} {{ course.teacher.lastname }}
                        </p>
                      </div>
                    </header>
                    <!-- Content -->
                    <div class="mt-2 h-1 w-12 bg-bta-pink group-hover:animate-pulse" />
                    <div class="mb-8 text-gray-400 font-inconsolata">
                      <p class="py-2">
                        {{ course.shortdes }}
                      </p>
                    </div>
                  </div>
                  <!-- Card footer -->
                  <div class="flex justify-between items-center">
                    <p class="font-inconsolata text-sm text-gray-400">
                      {{ course.total_length }}
                    </p>
                    <div v-if="course.price === 0 || course.price === null" class="font-semibold text-sm inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-150 ease-in-out bg-bta-pink/95 hover:bg-bta-pink text-white">
                      Gratis
                    </div>
                    <div v-else class="font-semibold text-sm inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-150 ease-in-out bg-bta-pink/95 hover:bg-bta-pink text-white">
                      $ {{ course.price }}
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glitch {
  position: relative;
  cursor: pointer;
}

.glitch:hover::before,
.glitch:hover::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.glitch:hover::before {
  animation: glitch-effect 3s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  text-shadow: -2px 0 #ff00c1;
}

.glitch:hover::after {
  animation: glitch-effect 2s infinite linear alternate-reverse;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  text-shadow: 2px 0 #00fff9;
}

@keyframes glitch-effect {
  0% { transform: translateX(-2px); }
  25% { transform: translateX(2px); }
  50% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(-2px); }
}

.searcher__input{
    transition: .5s;
  }
.searcher__input:focus{
  transform: translateX(-25px);
}

@media (min-width: 1440px) {
  .searcher__input:focus{
    transform: translateX(-34px);
  }
}
.searcher__icon{
  transition: .5s;
}
.searcher__input:focus ~ .searcher__icon{
  transform: translateX(-50px);
  opacity: 0;
}

.main-label {
  @apply text-[1em] cursor-pointer;
}
.main-label span{
  @apply inline-block relative h-[1.2em] w-[1.2em] bg-gray-muted rounded-full transition-all duration-700;
}
.main-label input {
  opacity: 0;
}
.main-label input:checked ~ span {
  box-shadow: 0px 0px 30px 0px #EC1075;
}

.main-label input:checked ~ span:before {
  content: "";
  position: absolute;
  background-color: #EC1075;
  width: 1.2em;
  height: 1.2em;
  overflow: hidden;
  border-radius: 50%;
  transition: .3s ease;
}
.main-label input:checked ~ span:after {
  opacity: 1;
}
</style>
