<script setup lang="ts">
interface Article {
  id: number
  title: string
  slug: string
  description: string
  created_at: string
  [key: string]: any
}

interface ApiResponse {
  data: Article[]
  total_pages: number
}

const articles = ref<Article[]>([])
const isLoading = ref(false)
const page = ref(1)
const perPage = ref(12)
const totalPages = ref<number | null>(null)
const isLoadingMore = ref(false)
const showButton = ref(false)
// auth: false,

useSeoMeta({
  title: 'Artículos - Backtrack Academy',
  description: 'Artículos sobre seguridad informática',
})

function handleScroll() {
  showButton.value = window.pageYOffset > 400
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

async function getArticles() {
  try {
    isLoading.value = true
    const { data: response } = await useAsyncData<ApiResponse>('articles', () =>
      $fetch('/api/v1/articles', {
        params: {
          per_page: perPage.value,
          page: page.value,
        },
      }))

    if (response.value) {
      articles.value = response.value.data
      totalPages.value = response.value.total_pages
    }
  }
  catch (error) {
    console.error('Error fetching articles:', error)
  }
  finally {
    isLoading.value = false
  }
}

async function getMoreArticles() {
  if (page.value >= (totalPages.value ?? 0))
    return

  try {
    isLoadingMore.value = true
    page.value++

    const { data: response } = await useAsyncData<ApiResponse>(`articles-page-${page.value}`, () =>
      $fetch('/api/v1/articles', {
        params: {
          per_page: perPage.value,
          page: page.value,
        },
      }))

    if (response.value) {
      articles.value = [...articles.value, ...response.value.data]
    }
  }
  catch (error) {
    console.error('Error fetching more articles:', error)
  }
  finally {
    isLoadingMore.value = false
  }
}

onMounted(() => {
  getArticles()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main class="bg-bta-blue px-4 sm:px-6 lg:px-8 pb-12">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-3xl font-semibold font-oswald text-white my-7">
        Noticias sobre <span class="text-bta-pink">seguridad</span>
      </h1>
      <div v-if="isLoading" class="grid place-content-center min-h-[calc(100vh-120px)]">
        <IconsSpinner />
      </div>
      <template v-else>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 py-5">
          <CardArticle v-for="article in articles" :key="article.id" :article="article" />
        </div>
        <div class="py-5 flex justify-center items-center">
          <IconsSpinner v-if="isLoadingMore" />
          <div v-else class="text-center">
            <button
              v-if="page < (totalPages ?? 0)"
              class="text-sm bg-bta-pink/90 hover:bg-bta-pink text-white px-6 py-2 rounded font-medium"
              @click="getMoreArticles"
            >
              Cargar más artículos
            </button>
          </div>
        </div>
      </template>
    </div>
    <div class="back-to-top h-14 w-14 fixed right-5 bottom-4 z-10">
      <button
        v-show="showButton"
        class="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out"
        aria-label="Volver arriba"
        @click="scrollToTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-full h-full text-bta-pink"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </main>
</template>
