<script setup lang="ts">
import type { ArticlesResponse } from '@/interfaces/discussion.response'
import { Button } from '@/components/ui/button'
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

definePageMeta({
  layout: 'custom',
  auth: true,
})

const currentPage = ref(1)
const itemsPerPage = ref(4)

// Usar la paginación del servidor
const { data: articles, status } = useAPI<ArticlesResponse>('/articles', {
  query: computed(() => ({
    page: currentPage.value,
    per_page: itemsPerPage.value,
  })),
})
</script>

<template>
  <div class="w-full py-8 px-16">
    <div class="lg:h-full">
      <h1 class="text-white text-3xl font-oswald mb-5 uppercase font-semibold">
        Noticias sobre seguridad
      </h1>
      <div class="flex">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 py-5">
          <CardArticle v-for="article in articles?.data" :key="article.id" :article="article" />
        </div>
        <div class="h-[200px]" />
      </div>
    </div>
  </div>
</template>
