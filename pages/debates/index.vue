<script setup lang="ts">
import type { DiscussionResponse } from '@/interfaces/discussion.response'
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
const { data: discussions, status } = useAPI<DiscussionResponse>('/discussions', {
  query: computed(() => ({
    page: currentPage.value,
    per_page: itemsPerPage.value,
  })),
})

// Obtener el total de páginas y elementos de la respuesta del servidor
const totalItems = computed(() => discussions.value?.total_items)

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
  <div class="container mx-auto px-4 lg:px-8 py-8">
    <h1 class="text-4xl font-bold text-white font-oswald mb-2">
      Debates
    </h1>
    <p class="text-gray-400 font-inconsolata mb-8">
      Explora y participa en las discusiones de la comunidad
    </p>

    <div v-if="status === 'pending'" class="flex justify-center items-center min-h-[200px]">
      <span class="text-white">Cargando debates...</span>
    </div>

    <template v-else>
      <!-- Lista de debates -->
      <div class="space-y-6">
        <CardDebate
          v-for="discussion in discussions?.data"
          :key="discussion.id"
          :discussion="discussion"
        />
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
    </template>
  </div>
</template>
