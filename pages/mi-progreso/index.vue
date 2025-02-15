<script setup lang="ts">
import Course from '@/components/courses/Course.vue'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
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

const currentPage = ref(1)
const itemsPerPage = ref(4)

// Función para obtener la URL del avatar
function getAvatarUrl(name) {
  return `https://ui-avatars.com/api/?background=141224&color=fff&name=${encodeURIComponent(name)}`
}

const { data: coursesHistory, status: coursesHistoryStatus } = await useAPI<CoursesHistory>('/courses/progress', {
  query: computed(() => ({
    page: currentPage.value,
    per_page: itemsPerPage.value,
  })),
})

// Obtener el total de páginas y elementos de la respuesta del servidor
const totalItems = computed(() => coursesHistory.value?.total_items)
</script>

<template>
  <div class="w-full py-8 p-16">
    <div class="lg:h-full">
      <h1 class="text-white text-3xl font-oswald mb-5 uppercase font-semibold">
        Cursos de hacking ético
      </h1>
      <!-- Sección de widget "mis cursos" -->
      <h2 class="text-white text-lg font-oswald mb-4" />
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(course, i) in coursesHistory?.courses" :key="i" class="bg-bta-dark-blue rounded-xl shadow-lg p-6 relative overflow-hidden">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-bta-pink bg-bta-dark-blue">
                <img
                  src="https://ui-avatars.com/api/?background=141224&color=fff"
                  alt="Profile"
                  class="w-full h-full object-cover"
                >
              </div>
              <div>
                <h2 class="text-xl font-semibold text-white font-oswald">
                  {{ course.titulo }}
                </h2>
                <div class="text-gray-muted text-sm font-inconsolata">
                  <!-- <span class="font-medium">{{ course?.number_courses }} cursos</span> - Ruta Personalizada -->
                </div>
              </div>
            </div>
            <div class="w-full">
              <span class="font-inconsolata text-bta-pink font-medium text-sm leading-2">{{ course?.last_video_viewed?.titlevideo }}</span>
              <div class="w-full h-2 bg-bta-blue rounded-full overflow-hidden mt-4">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-bta-pink to-rose-500 transition-all duration-500 ease-out"
                  :style="{ width: `${course?.percent}%` }"
                />
              </div>
              <div class="mt-4 flex justify-between items-center text-sm">
                <span v-if="course?.percent" class="text-bta-pink font-medium font-inconsolata">
                  {{ Math.round(course.percent) }}%
                </span>
                <div class="flex gap-1 ml-auto font-inconsolata text-white">
                  <span>
                    {{ course?.count_video }}
                  </span>
                  <span>
                    de
                  </span>
                  <span>
                    {{ course?.number_videos }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Paginación -->
        <div class="mt-8 flex justify-center">
          <Pagination
            v-slot="{ page }"
            :total="totalItems"
            :per-page="itemsPerPage"
            :sibling-count="1"
            show-edges
            :default-page="currentPage"
            @update:page="currentPage = $event"
          >
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
              <PaginationFirst />
              <PaginationPrev />

              <template v-for="(item, index) in items">
                <PaginationListItem
                  v-if="item.type === 'page'"
                  :key="index"
                  :value="item.value"
                  as-child
                >
                  <Button
                    class="w-10 h-10 p-0"
                    :variant="item.value === page ? 'default' : 'outline'"
                  >
                    {{ item.value }}
                  </Button>
                </PaginationListItem>
                <PaginationEllipsis
                  v-else
                  :key="item.type"
                  :index="index"
                />
              </template>

              <PaginationNext />
              <PaginationLast />
            </PaginationList>
          </Pagination>
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
