<script setup lang="ts">
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

// Estados reactivos para filtros
const query = ref('')
const isLoading = ref(true)
const awaitingSearch = ref(false)
const user_ids = ref<number[]>([])
const level_ids = ref<number[]>([])
const category_ids = ref<number[]>([])

// Estados para almacenar datos
const courses = ref<Course[]>([])
const teachers = ref<Teacher[]>([])
const levels = ref<Level[]>([])
const categories = ref<Category[]>([])

// Función para obtener los cursos
async function getCourses() {
  isLoading.value = true
  try {
    const { data } = await useFetch<Course[]>('/api/v1/courses', {
      params: {
        user_ids: user_ids.value,
        level_ids: level_ids.value,
        category_ids: category_ids.value,
        query: query.value,
      },
    })
    if (data.value)
      courses.value = data.value
  }
  catch (error) {
    console.error('Error al cargar los cursos:', error)
  }
  finally {
    isLoading.value = false
  }
}

// Función para obtener profesores
async function getTeachers() {
  try {
    const { data } = await useFetch<Teacher[]>('/api/v1/teacher')
    if (data.value)
      teachers.value = data.value
  }
  catch (error) {
    console.error('Error al cargar los profesores:', error)
  }
}

// Función para obtener niveles
async function getLevels() {
  try {
    const { data } = await useFetch<Level[]>('/api/v1/level')
    if (data.value)
      levels.value = data.value
  }
  catch (error) {
    console.error('Error al cargar los niveles:', error)
  }
}

// Función para obtener categorías
async function getCategories() {
  try {
    const { data } = await useFetch<Category[]>('/api/v1/category')
    if (data.value)
      categories.value = data.value
  }
  catch (error) {
    console.error('Error al cargar las categorías:', error)
  }
}

// Watchers para los filtros
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
onMounted(async () => {
  try {
    await Promise.all([
      getCourses(),
      getTeachers(),
      getLevels(),
      getCategories(),
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
  <div>
    <main class="bg-bta-section mx-auto sm-px-6">
      <div class="flex bg-bta-dark-blue">
        <!-- Filters -->
        <form class="hidden lg:block w-3/12 px-[1%] xl:px-[2.4%] sticky top-20 h-screen overflow-y-auto">
          <!-- <h3 class="sr-only">Tipos</h3>
          <ul role="list"
            class="text-sm font-medium font-inconsolata text-white space-y-4 pb-6 border-b border-gray-border">
            <li>
              <a href="#"> Recomendado</a>
            </li>

            <li>
              <a href="#"> Todos </a>
            </li>

            <li>
              <a href="#"> Gratis </a>
            </li>

            <li>
              <a href="#"> Premiun </a>
            </li>
          </ul> -->
          <div class="relative pt-12 pb-4">
            <form class="flex flex-row-reverse gap-1 bg-gray-border items-center justify-between px-3 py-2 rounded-full overflow-hidden" action="/search">
              <input
                v-model="query"
                class="bg-transparent text-white w-60 outline-none text-sm focus:translate-x-10 searcher__input"
                type="text"
                placeholder="¿Qué te gustaría aprender?"
              >
              <svg
                class="text-white searcher__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none" stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" /><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </form>
          </div>
          <div class="relative">
            <input
              id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
            >

            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Categorías
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>

            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <!-- Filter section categories, show/hide based on section state. -->
            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">
                <div v-for="(category, i) in categories" :key="i">
                  <div class="flex items-center gap-2 ">
                    <label
                      :for="category.name"
                      class="flex text-sm items-center gap-2 font-inconsolata text-white relative select-none cursor-pointer"
                    >
                      <label class="main-label flex items-center mr-1">
                        <input
                          :id="category.name"
                          v-model="category_ids"
                          :value="category.id"
                          name="size[]"
                          type="checkbox"
                        >
                        <span />
                      </label>
                      <h3>{{ category.name }}</h3>
                      <span class="text-gray-muted hover:text-white">
                        {{ category.number_courses }}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <input
              id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
            >
            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Dificultad
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>
            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <!-- Filter section levels, show/hide based on section state. -->
            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">
                <div v-for="(level, i) in levels" :key="i">
                  <div class="flex items-center gap-2">
                    <label
                      :for="level.name"
                      class="flex text-sm items-center gap-2 font-sans text-white relative select-none cursor-pointer"
                    >
                      <label class="main-label flex items-center mr-1">
                        <input
                          :id="level.name"
                          v-model="level_ids"
                          :value="level.id"
                          name="size[]"
                          type="checkbox"
                        >
                        <span />
                      </label>
                      <h3>{{ level.name }}</h3>
                      <label class="text-gray-muted font-inconsolata hover:text-white">
                        {{ level.number_courses }}
                      </label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <input
              id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
            >
            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Docentes
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>
            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <!-- Filter section teachers, show/hide based on section state. -->
            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">
                <div v-for="(teacher, i) in teachers" :key="i">
                  <div class="flex items-center">
                    <label
                      :for="teacher.name"
                      class="flex text-sm items-center gap-2 font-sans text-white relative select-none cursor-pointer"
                    >
                      <label class="main-label flex items-center mr-1">
                        <input
                          :id="teacher.name"
                          v-model="user_ids"
                          :value="teacher.id"
                          name="size[]"
                          type="checkbox"
                        >
                        <span />
                      </label>
                      <h3>{{ teacher.name }} {{ teacher.lastname }} </h3>
                      <label class="text-gray-muted font-inconsolata hover:text-white">
                        {{ teacher.number_courses }}
                      </label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="lg:col-span-3 bg-bta-blue w-full lg:w-9/12 px-4 sm:px-6 xl:px-8 min-h-screen lg:min-h-min">
          <div class="lg:h-full max-w-6xl mx-auto">
            <div class="py-10">
              <h1 class="text-white text-3xl lg:text-4xl xl:text-5xl font-oswald font-semibold xl:pl-5">
                Cursos de hacking ético
              </h1>
            </div>
            <template v-if="isLoading">
              <div class="grid place-items-center min-h-[50vh]">
                <div class="flex flex-col items-center">
                  <IconsSpinner class="text-white" />
                  <p class="text-white font-inconsolata text-center mt-2">
                    Cargando cursos...
                  </p>
                </div>
              </div>
            </template>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 xl:gap-x-8 pb-10">
              <div v-for="(course, i) in courses" :key="i">
                <div
                  class="max-w-[300px] mx-auto h-full shadow-md shadow-bta-dark-blue transition-shadow duration-500 "
                >
                  <NuxtLink
                    :to="`/curso/${course.slug}`"
                    class=" focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-bta-pink group"
                  >
                    <div class="flex flex-col h-full bg-bta-dark-blue shadow-lg rounded-lg overflow-hidden">
                      <!-- Image -->
                      <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          :src="course.image_thumb" width="320" height="180" alt="Course"
                        >
                      </figure>
                      <!-- Card Content -->
                      <div class="flex-grow flex flex-col p-5">
                        <!-- Card body -->
                        <div class="flex-grow">
                          <!-- Header -->
                          <header class="mb-3 site-heading">
                            <div class="glitch-parent">
                              <h3 class="glitch text-[22px] font-extrabold leading-snug font-oswald text-white">
                                <span aria-hidden="true">{{ course.titulo }}</span>
                                {{ course.titulo }}
                                <span aria-hidden="true">{{ course.titulo }}</span>
                              </h3>
                            </div>
                            <div class="mt-2">
                              <p class="text-white font-inconsolata">
                                {{ course.teacher.name }} {{ course.teacher.lastname }}
                              </p>
                            </div>
                          </header>
                          <!-- Content -->
                          <div class="mt-4 h-1 w-12 bg-bta-pink group-hover:animate-fast-pulse" />
                          <div class="mb-8 text-gray-muted font-inconsolata">
                            <p class="py-2">
                              {{ course.shortdes }}
                            </p>
                          </div>
                        </div>
                        <!-- Card footer -->
                        <div class="flex justify-end space-x-2">
                          <p
                            class="font-inconsolata text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-muted hover:underline focus:outline-none focus-visible:ring-2"
                          >
                            {{ course.total_length }}
                          </p>
                          <a
                            v-if="course.price === 0 || course.price === null"
                            class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-bta-pink/95 focus:outline-none focus-visible:ring-2 hover:bg-bta-pink text-white"
                          >
                            Gratis </a>
                          <div
                            v-else
                            class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-bta-pink/95 focus:outline-none focus-visible:ring-2 hover:bg-bta-pink text-white"
                          >
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
      </div>
    </main>
  </div>
</template>

<style scoped>
.glitch:hover{
  position: relative;
  text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
    0.025em 0.04em 0 #e7e413fd;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #0846ff, 0.025em 0.035em 0 #f90c0c,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #0846ff, 0.025em 0.035em 0 #f90c0c,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #0846ff, 0.03em 0 0 #f90c0c,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #0846ff, 0.03em 0 0 #f90c0c,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #0846ff, -0.025em -0.04em 0 #f90c0c,
      -0.04em -0.025em 0 #fffc00;
  }
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
