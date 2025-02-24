<script setup lang="ts">
import type { Article } from '@/interfaces/articles.response'

// Obtener slug de la ruta
const route = useRoute('articulos-slug')
const { slug } = route.params

// Fetch del artículo
const { data: article } = useAPI<Article>(`/articles/${slug}`, {
  watch: false,
})

const imageProps = computed(() => ({
  width: 800,
  height: 400,
  format: 'webp',
  quality: 80,
  custom: true,
}))

useSeoMeta({
  title: () => article?.value?.title ?? '',
  description: () => article?.value?.description ?? '',
  ogTitle: () => article?.value?.title ?? '',
  ogDescription: () => article?.value?.short ?? '',
  ogImage: () => article?.value?.image_thumb_service ?? '',
  ogUrl: () => `https://www.backtrackacademy.com/articulos/${article?.value?.slug}`,
  twitterTitle: () => article?.value?.title ?? '',
  twitterDescription: () => article?.value?.short ?? '',
  twitterImage: () => article?.value?.image_thumb_service ?? '',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <section class="bg-bta-dark-blue px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto py-12">
      <article v-if="article" class="space-y-8">
        <!-- Header con imagen y título -->
        <header class="space-y-6">
          <figure class="relative aspect-[2/1] rounded-lg overflow-hidden">
            <NuxtImg
              :src="article.image_thumb_service"
              :alt="`Imagen principal de ${article.title}`"
              v-bind="imageProps"
              sizes="sm:100vw md:800px"
              loading="lazy"
              class="object-cover w-full h-full transition-opacity duration-300"
            >
              <template #fallback>
                <div class="w-full h-full bg-gray-700 animate-pulse" />
              </template>
            </NuxtImg>
          </figure>

          <h1 class="text-white text-3xl md:text-4xl font-semibold text-center font-oswald leading-tight">
            {{ article.title }}
          </h1>

          <!-- Información del autor y fecha -->
          <div class="flex items-center justify-center space-x-4 text-gray-300">
            <div class="flex items-center space-x-2">
              <span class="font-inconsolata">Por</span>
              <span class="font-semibold">{{ article.user.name || article.user.username }}</span>
            </div>
            <span class="text-gray-500">•</span>
            <time :datetime="article.created_at.toString()" class="font-inconsolata">
              {{ new Date(article.created_at).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }) }}
            </time>
          </div>
        </header>
        <!-- Contenido principal -->
        <main class="prose prose-lg prose-invert max-w-none">
          <div
            class="font-inconsolata space-y-4"
            v-html="article.description"
          />
        </main>
      </article>

      <!-- Estado de carga o error -->
      <div v-else class="min-h-[50vh] flex items-center justify-center">
        <div class="text-white text-center space-y-4">
          <div class="w-16 h-16 mx-auto border-4 border-white border-t-transparent rounded-full animate-spin" />
          <p class="font-inconsolata">
            Cargando artículo...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
