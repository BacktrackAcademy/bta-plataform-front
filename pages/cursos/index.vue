<script setup lang="ts">
import type { CoursesResponse } from '~/interfaces/courses.response'
import CourseCard from '@/components/courses/CourseCard.vue'
import { Input } from '@/components/ui/input'

definePageMeta({
  layout: 'custom',
  auth: true,
})

const searchQuery = ref('')
const selectedTeachers = ref<string[]>([])
const levelSelected = ref<string[]>([])
const categorySelected = ref<string[]>([])

const perPage = ref(6)

const { data: teachers, status: _teachersStatus } = useAPI('/teacher')
const { data: levels, status: _levelsStatus } = useAPI('/level')
const { data: categories, status: _categoriesStatus } = useAPI('/category')

const courses = ref<CoursesResponse>({
  courses: [],
  pagination: {
    current_page: 1,
    per_page: 10,
    total_entries: 0,
    total_pages: 0,
  },
})

const currentPage = ref(1)
const hasMore = ref(true)
const isLoading = ref(false)
const scrollContainer = ref<HTMLElement | null>(null)

async function loadMoreCourses() {
  if (isLoading.value || !hasMore.value)
    return

  isLoading.value = true

  try {
    const { data: coursesData } = await useAPI<CoursesResponse>('/courses', {
      params: {
        'page': currentPage.value,
        'per_page': perPage.value,
        'query': searchQuery.value,
        'users_ids[]': selectedTeachers.value,
        'category_ids[]': categorySelected.value,
        'level_ids[]': levelSelected.value,
      },
    })

    if (coursesData.value) {
      courses.value = {
        courses: [...courses.value.courses, ...coursesData.value.courses],
        pagination: coursesData.value.pagination,
      }

      const { current_page, total_pages } = coursesData.value.pagination
      hasMore.value = current_page < total_pages
      currentPage.value++
    }
  }
  catch (err) {
    console.error('Error cargando cursos:', err)
  }
  finally {
    isLoading.value = false
  }
}

async function handleSearch() {
  if (isLoading.value)
    return

  courses.value = {
    courses: [],
    pagination: {
      current_page: 1,
      per_page: perPage.value,
      total_entries: 0,
      total_pages: 0,
    },
  }
  currentPage.value = 1
  hasMore.value = true

  // Scroll al inicio
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0
  }

  await loadMoreCourses()
}

function handleScroll(event: Event) {
  if (!hasMore.value || isLoading.value)
    return

  const container = event.target as HTMLElement
  const { scrollTop, scrollHeight, clientHeight } = container

  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMoreCourses()
  }
}

// Usar watch para reaccionar a cambios en los filtros
watch([searchQuery, selectedTeachers, levelSelected, categorySelected], () => {
  handleSearch()
})

onMounted(() => {
  loadMoreCourses()
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
})

function handleTeacherClick(teacherId: string) {
  if (!teacherId) {
    console.warn('El ID del profesor es inválido:', teacherId)
    return
  }

  const isTeacherSelected = selectedTeachers.value.includes(teacherId)

  if (isTeacherSelected) {
    selectedTeachers.value = selectedTeachers.value.filter(id => id !== teacherId)
  }
  else {
    selectedTeachers.value = [...selectedTeachers.value, teacherId]
  }

  applyFilters()
}

function applyFilters() {
  // Aquí puedes agregar cualquier lógica adicional necesaria después de cambiar los filtros
  // Por ejemplo, disparar una nueva búsqueda o actualizar la interfaz
  handleSearch()
}

function handleCategorySelected(newSelected: string[]) {
  categorySelected.value = newSelected
}

function handleLevelSelected(newSelected: string[]) {
  levelSelected.value = newSelected
}

interface Option {
  value: string
  label: string
}

interface Teacher {
  id: string
  name: string
  lastname: string
}

interface Category {
  id: string
  name: string
}

interface Level {
  id: string
  name: string
}

const formattedTeachers = computed<Option[]>(() =>
  (teachers.value as Teacher[] || []).map(teacher => ({
    value: teacher.id,
    label: `${teacher.name} ${teacher.lastname}`,
  })),
)

const formattedCategories = computed<Option[]>(() =>
  (categories.value as Category[] || []).map(category => ({
    value: category.id,
    label: category.name,
  })),
)

const formattedLevels = computed<Option[]>(() =>
  (levels.value as Level[] || []).map(level => ({
    value: level.id,
    label: level.name,
  })),
)

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
  <div
    ref="scrollContainer"
    class="w-full py-8 px-16 h-[calc(100vh-64px)] overflow-y-auto"
  >
    <div class="lg:h-full">
      <h1 class="text-white text-3xl font-oswald mb-6 uppercase font-semibold">
        Cursos de hacking ético
      </h1>
      <div class="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 ">
        <!-- Sección de cursos -->
        <div
          v-if="isLoading && !courses.courses.length"
          class="w-full flex-1 min-h-[calc(100vh-200px)] grid place-items-center"
        >
          <div class="text-center">
            <Icon name="mingcute:loading-fill" class="text-bta-pink animate-spin size-6" />
            <p class="text-inconsolata">
              Cargando cursos...
            </p>
          </div>
        </div>
        <div
          v-else-if="!isLoading && courses.courses.length === 0 && (searchQuery || selectedTeachers.length || levelSelected.length || categorySelected.length)"
          class="w-full flex-1 min-h-[calc(100vh-200px)] grid place-items-center"
        >
          <div class="text-center">
            <p>No se encontraron cursos que coincidan con los filtros</p>
          </div>
        </div>

        <div v-else class="flex-1 grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4 mb-80">
          <div v-for="course in courses.courses" :key="course.id" class="flex">
            <CourseCard :course="course" />
          </div>

          <!-- Indicador de carga al final -->
          <div v-if="isLoading" class="col-span-full py-4 text-center">
            <Icon name="mingcute:loading-fill" class="text-bta-pink animate-spin size-6" />
            <p>Cargando más cursos...</p>
          </div>
        </div>

        <!-- Filtros -->
        <div class="h-[200px]">
          <div class="space-y-4 max-w-[290px] w-full sticky top-10">
            <div class="relative flex-1">
              <label class="text-sm font-medium mb-2 font-oswald block">Cursos</label>
              <Input
                v-model="searchQuery"
                class="placeholder:font-inconsolata"
                placeholder="Buscar cursos..."
              />
            </div>

            <div>
              <label class="text-sm font-medium mb-2 font-oswald block">Categorías</label>
              <MultiSelect
                class-name="font-inconsolata"
                :options="formattedCategories || []"
                :selected="categorySelected"
                placeholder="Categorías"
                search-placeholder="Buscar categorías..."
                @change="handleCategorySelected"
              />
            </div>
            <div>
              <label class="text-sm font-medium mb-2 font-oswald block">Niveles</label>
              <MultiSelect
                class-name="font-inconsolata"
                :options="formattedLevels || []"
                :selected="levelSelected"
                placeholder="Niveles"
                search-placeholder="Buscar niveles..."
                @change="handleLevelSelected"
              />
            </div>

            <!-- Profesores -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium mb-2 font-oswald">
                Profesores
              </h3>
              <div class="space-y-1 font-inconsolata">
                {{ selectedTeachers.value }}
                <button
                  v-for="teacher in formattedTeachers"
                  :key="teacher.value"
                  class="w-full text-left px-3 py-2 rounded-md text-sm transition-colors" :class="[
                    selectedTeachers.includes(teacher.value)
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary',
                  ]"
                  @click="handleTeacherClick(teacher.value)"
                >
                  {{ teacher.label }}
                </button>
              </div>
            </div>

            <Button
              class="rounded-md bg-bta-pink px-8 py-2 text-primary hover:bg-bta-pink/90"
              @click="handleSearch"
            >
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
