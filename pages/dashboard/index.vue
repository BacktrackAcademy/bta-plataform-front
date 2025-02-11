<script setup lang="ts">
import Course from '@/components/courses/Course.vue'
import { Skeleton } from '~/components/ui/skeleton'

definePageMeta({
  layout: 'custom',
  auth: true,
})

interface CoursesHistory {
  number_courses: number
  progress_percentage: number
  total_length: string
  total_viewed: string
}

interface Degree {
  id: number
  name: string
  description: string
}

// Función para formatear las horas de manera redondeada
function formatTime(timeString: string | undefined): string {
  if (!timeString)
    return '0'

  const [hours, minutes] = timeString.split(':')
  const totalHours = Math.round(Number.parseInt(hours) + Number.parseInt(minutes) / 60)

  return `${totalHours}`
}
// Función para obtener la URL del avatar
function getAvatarUrl(name) {
  return `https://ui-avatars.com/api/?background=141224&color=fff&name=${encodeURIComponent(name)}`
}

const { data: coursesHistory, status: coursesHistoryStatus } = await useAPI<CoursesHistory>('/courses/history')
const { data: Degree, status: DegreeStatus } = await useAPI<Degree>('/degrees')

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
  <div class="w-full py-8 p-16">
    <div class="lg:h-full">
      <h1 class="text-white text-3xl font-oswald mb-5 uppercase font-semibold">
        Cursos de hacking ético
      </h1>
      <!-- Sección de widget "mis cursos" -->
      <h2 class="text-white text-lg font-oswald mb-4">
        Resumen avances
      </h2>

      <div v-if="coursesHistoryStatus === 'pending'" class="max-w-sm bg-bta-dark-blue rounded-xl shadow-lg p-6 relative overflow-hidden">
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
      <div v-else class="max-w-sm bg-bta-dark-blue rounded-xl shadow-lg p-6 relative overflow-hidden">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-bta-pink">
            <img
              src="https://ui-avatars.com/api/?background=141224&color=fff"
              alt="Profile"
              class="w-full h-full object-cover"
            >
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white font-oswald">
              Mis Cursos
            </h2>
            <div class="text-gray-muted text-sm font-inconsolata">
              <span class="font-medium">{{ coursesHistory?.number_courses }} cursos</span> - Ruta Personalizada
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="w-full h-2 bg-bta-blue rounded-full overflow-hidden">
            <div
              class="h-full rounded-full bg-gradient-to-r from-bta-pink to-rose-500 transition-all duration-500 ease-out"
              :style="{ width: `${coursesHistory?.progress_percentage}%` }"
            />
          </div>
          <div class="mt-2 flex justify-between items-center text-sm">
            <span v-if="coursesHistory?.progress_percentage" class="text-bta-pink font-medium">
              {{ Math.round(coursesHistory.progress_percentage) }}%
            </span>
            <div class="flex gap-1 ml-auto font-inconsolata text-white">
              <span>
                {{ formatTime(coursesHistory?.total_viewed) }}
              </span>
              <span>
                de
              </span>
              <span>
                {{ formatTime(coursesHistory?.total_length) }} horas
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- Descubre las escuelas -->
      <section className="space-y-4">
        <h2 class="text-white text-lg font-oswald my-4">
          Descubre nuestras especialidades
        </h2>
        <div class="flex items-center gap-y-4 gap-4">
          <div
            v-for="(degree, i) in Degree" :key="i"
            class="flex flex-col items-center gap-y-4 gap-4 justify-center rounded-md p-4 space-y-2"
          >
            <div class="items-center">
              <div class="rounded-full overflow-hidden border-2 border-bta-pink hover:bg-bta-dark-blue w-14 h-14">
                <img :src="getAvatarUrl(degree.name)">
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Sección de cursos -->
      <template v-if="coursesHistoryStatus === 'pending'">
        <div class="grid place-items-center min-h-[calc(100vh-400px)]">
          <div class="flex flex-col items-center">
            <IconsSpinner class="text-white" />
            <p class="text-white font-inconsolata text-center mt-2">
              Cargando cursos...
            </p>
          </div>
        </div>
      </template>
      <div v-else>
        <h2 class="text-white text-lg font-oswald my-4 mt-8">
          Continuar estudiando...
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(course, i) in coursesHistory?.courses" :key="i" class="flex">
            <Course :course="course" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
