<script setup lang="ts">
defineProps<{ degree: Degrees, status: DegreePending }>()
// Función para obtener la URL del avatar
function getAvatarUrl(name: string): string {
  return `https://ui-avatars.com/api/?background=141224&color=fff&name=${encodeURIComponent(name)}`
}
</script>

<template>
  <div v-if="status" class="w-full max-w-md bg-bta-dark-blue rounded-xl shadow-lg p-6 flex items-center gap-4 relative overflow-hidden">
    <!-- Avatar Skeleton -->
    <div class="w-12 h-12 rounded-full border-2 border-bta-pink flex items-cestnter justify-center bg-bta-dark-blue" />

    <!-- Texto Skeleton -->
    <div class="flex-1">
      <div class="mb-2">
        <Skeleton class="h-6 w-4/4" />
      </div>

      <!-- Indicadores de cursos y tiempo -->
      <div class="flex items-center gap-4 mt-3">
        <Skeleton class="h-5 w-16" />
        <Skeleton class="h-5 w-24" />
      </div>
    </div>
  </div>
  <div v-else class="bg-bta-dark-blue flex items-start gap-4 rounded-xl px-3 py-3 shadow-lg transition-all duration-200 ease-in-out transform min-w-64 group">
    <!-- Avatar -->
    <div class="rounded-full overflow-hidden border-2 border-bta-pink w-12 h-12 shrink-0 transition-transform mt-1">
      <img
        :src="getAvatarUrl(degree?.name)"
        :alt="`Avatar for ${degree?.name}`"
        class="w-full h-full object-cover"
      >
    </div>

    <!-- Content -->
    <div class="flex flex-col justify-center space-y-1">
      <!-- Title -->
      <div class="items-center">
        <span class="font-oswald font-semibold text-lg text-white block">  {{ degree?.name }}</span>
        <span
          class="px-2.5 py-0.5 bg-bta-pink text-white tracking-tighter font-inconsolata text-sm rounded-full max-w-fit transition-colors group-hover:bg-gradient-to-r from-bta-pink to-rose-500"
        >
          {{ degree?.level }}
        </span>
      </div>

      <!-- Details -->
      <div class="space-y-1">
        <div class="inline-block align-middle mr-4">
          <Icon name="lucide:book-audio" class="size-3.5 mr-1 text-gray-muted align-middle" />
          <span class="font-inconsolata text-sm text-gray-muted tracking-tighter align-middle">
            {{ degree?.count_courses }} cursos
          </span>
        </div>
        <div class="inline-block align-middle">
          <Icon name="lucide:clock" class="size-3.5 mr-1 text-gray-muted align-middle" />
          <span class="font-inconsolata text-sm text-gray-muted tracking-tighter align-middle">
            {{ degree?.all_time }} horas
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
