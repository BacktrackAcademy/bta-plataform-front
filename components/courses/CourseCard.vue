<script setup lang="ts">
import type { Course } from '~/interfaces/courses.response'

defineProps<{ course: Course }>()

const { convertToHours } = useFormatter()
</script>

<template>
  <div class="w-full max-w-[300px] h-full shadow-lg shadow-bta-dark-blue/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <NuxtLink
      :to="`/curso/${course?.slug}`"
      class="focus-visible:outline-2 focus-visible:outline-bta-pink focus-visible:outline-offset-2 group"
    >
      <div class="flex flex-col h-full bg-bta-dark-blue rounded-lg overflow-hidden transition-colors duration-300 ease-in-out">
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
        <div class="flex-grow flex flex-col p-4">
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
                <p class="text-white font-inconsolata">
                  {{ course.teacher.name }} {{ course.teacher.lastname }}
                </p>
              </div>
            </header>
            <!-- Content -->
            <div class="mt-2 h-1 w-12 bg-bta-pink group-hover:animate-pulse" />
            <div class="mb-6 font-inconsolata">
              <p class="py-2 text-gray-muted">
                {{ course.shortdes }}
              </p>
            </div>
          </div>
          <!-- Card footer -->
          <div class="flex justify-between items-center">
            <p class="text-sm text-gray-400" />
            <div
              v-if="course.price === 0 || course.price === null"
              class="font-owsald text-sm inline-flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out bg-bta-pink/95 hover:bg-bta-pink hover:scale-105 hover:-translate-y-1 text-white"
            >
              Gratis
            </div>
            <div
              v-else
              class="font-owsald text-sm inline-flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out bg-bta-pink/95 hover:bg-bta-pink hover:scale-105 hover:-translate-y-1 text-white"
            >
              $ {{ course.price }}
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
@keyframes glitch-effect {
  0% { transform: translateX(-2px); }
  25% { transform: translateX(2px); }
  50% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(-2px); }
}
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

/* Animación suave para el precio */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.hover\:scale-105:hover {
  transform: scale(1.05) translateY(-0.25rem);
}
</style>
