<script setup lang="ts">
interface Course {
  slug: string
  image_thumb: string
  titulo: string
  shortdes: string
  total_duration_text: string
  price: number | null
}

defineProps<{ course: Course }>()
</script>

<template>
  <div class="w-full max-w-[300px] h-full shadow-lg shadow-bta-dark-blue/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <NuxtLink
      :to="`/curso/${course?.slug}`"
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
                <!-- <p class="text-gray-300 font-inconsolata">
                          {{ course.teacher.name }} {{ course.teacher.lastname }}
                        </p> -->
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
              {{ course.total_duration_text }}
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
</template>
