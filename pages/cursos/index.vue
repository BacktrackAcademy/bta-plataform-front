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

// const { data: courses, status } = await useAPI<Course[]>('/courses')

const { data: teachers, status: teachersStatus } = await useAPI<Teacher[]>('/teacher')
const { data: levels, status: levelsStatus } = await useAPI<Level[]>('/level')
const { data: categories, status: categoriesStatus } = await useAPI<Category[]>('/category')
const { data: coursesHistory, status: coursesHistoryStatus } = await useAPI<CoursesHistory>('/courses')
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
      <!-- Sección de cursos -->
      <template v-if="status === 'pending'">
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
          <div v-for="(course, i) in coursesHistory" :key="i" class="flex">
            <Course :course="course" />
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
