<script setup lang="ts">
interface Discussion {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
}

const { data: discussions } = await useAsyncData<Discussion[]>('discussions', () => $fetch('/api/v1/discussions'))

useSeoMeta({
  title: 'Debates',
  description: 'Preguntas y respuestas',
  ogTitle: 'Debates',
  ogDescription: 'Preguntas y respuestas',
  ogImage: '/og-image.png',
  ogUrl: 'https://backtrackacademy.com',
  twitterTitle: 'Debates',
  twitterDescription: 'Preguntas y respuestas',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="px-4 sm:px-6 lg:px-8 bg-bta-section pb-12">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-3xl font-semibold font-oswald text-white mt-4 mb-10">
        Preguntas y <span class="text-bta-pink">respuestas</span>
      </h1>
      <div class="grid grid-cols-1 gap-7 overflow-hidden">
        <CardDebate
          v-for="discussion in discussions"
          :key="discussion.id"
          :discussion="discussion"
        />
      </div>
    </div>
  </main>
</template>
