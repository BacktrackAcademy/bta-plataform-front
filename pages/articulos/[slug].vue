<script setup lang="ts">
interface Article {
  title: string
  image_thumb: string
  short: string
}

const route = useRoute()
const { slug } = route.params

const { data: article } = await useFetch<Article>(`/api/v1/article/${slug}`)
</script>

<template>
  <section class="bg-bta-dark-blue px-4 sm:px-6 lg:px-8">
    <div class="max-w-[800px] mx-auto">
      <article>
        <header class="mb-4">
          <img :src="article?.image_thumb" alt="article">
          <h1 class="mt-5 text-white font-semibold font-oswald text-3xl">
            {{ article?.title }}
          </h1>
        </header>
        <div class="text-white font-inconsolata">
          {{ article?.short }}
        </div>
      </article>
    </div>
  </section>
</template>
