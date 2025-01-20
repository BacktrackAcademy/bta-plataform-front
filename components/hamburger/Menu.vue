<script setup lang="ts">
defineEmits<{
  close: []
}>()
const mobileLinks = [
  { name: 'Felipe Barrios', url: '/login' },
  { name: 'Cursos', url: '/login' },
  { name: 'Artículos', url: '/login' },
  { name: 'Debates', url: '/login' },
  { name: 'Noticias', url: '/login' },
  { name: 'Planes', url: '/login' },
]
</script>

<template>
  <div class="p-4 flex flex-col">
    <div class="relative rounded-lg overflow-hidden">
      <input type="text" class="w-full bg-[#242424] text-sm text-white rounded-lg px-4 py-2 placeholder:text-white placeholder:opacity-50" placeholder="Buscar área, especialidad, curso…">
      <div class="w-14 h-full absolute top-0 right-0 bg-bta-pink flex justify-center items-center">
        <svg
          class="text-white searcher__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none" stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" /><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>
    </div>
    <div class="flex flex-col mb-5">
      <div
        v-for="link, key in mobileLinks"
        :key="key"
        class="px-1.5 pt-2 pb-1 text-white border-b border-white font-oswald text-lg"
        @click="$emit('close')"
      >
        <NuxtLink class="block" :to="link.url">
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
    <div>
      <NuxtLink to="/login" class="block bg-bta-pink text-white text-xl font-oswald rounded-lg py-2 text-center my-0" @click="$emit('close')">
        Inicia sesión o Regístrate
      </NuxtLink>
    </div>
  </div>
</template>
