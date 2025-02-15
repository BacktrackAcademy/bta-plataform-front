<script setup lang="ts">
import type { Datum } from '@/interfaces/discussion.response'

defineProps<{ discussion: Datum }>()
const { timeAgo } = useFormatter()
</script>

<template>
  <article class="max-w-3xl rounded-xl bg-bta-dark-blue p-8 drop-shadow-xl hover:shadow-2xl transition-all duration-300">
    <!-- Header -->
    <header class="flex items-center mb-4">
      <picture class="rounded-full overflow-hidden h-12 w-12 mr-3 border-2 border-bta-pink">
        <img
          class="object-cover w-full h-full"
          src="https://djo7sloxtuec0.cloudfront.net/assets/avatar-50-0786e8de7062852709e518d8a1d88272d584f121d70a493ea2a4857c60914f31.png"
          alt="user image"
        >
      </picture>
      <div class="flex flex-col">
        <NuxtLink class="text-white group" to="/debates">
          <p class="font-inconsolata text-base">
            {{ discussion.user.name }} {{ discussion.user.lastname }}
            <span class="text-gray-muted ml-1 text-sm">realizó una pregunta</span>
          </p>
        </NuxtLink>
        <time class="text-gray-400 text-sm font-inconsolata mt-0.5" :datetime="discussion.created_at">
          {{ timeAgo(discussion.created_at) }}
        </time>
      </div>
    </header>
    <!-- body -->
    <h2 class="font-medium font-oswald text-2xl mb-6 leading-tight">
      <NuxtLink class="glitch" :to="`/debates/${discussion.slug}`" :data-text="discussion.title">
        {{ discussion.title }}
      </NuxtLink>
    </h2>
    <div class="text-gray-300 font-inconsolata prose-sm max-w-none leading-relaxed" v-html="discussion.body" />
    <!-- footer -->
    <footer class="mt-8 pt-4">
      <NuxtLink
        class="text-gray-400 font-inconsolata text-sm hover:text-bta-pink transition-colors flex items-center gap-2"
        :to="`/debates/${discussion.slug}`"
      >
        <span>Ver todos los comentarios</span>
        <Icon name="lucide:chevron-right" />
      </NuxtLink>
    </footer>
  </article>
</template>

<style scoped>
@keyframes glitch-effect {
  0% { transform: translateX(-2px); }
  25% { transform: translateX(2px); }
  50% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(-2px); }
}
.glitch {
  position: relative;
  cursor: pointer;
}

.glitch:hover::before,
.glitch:hover::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.glitch:hover::before {
  animation: glitch-effect 3s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  text-shadow: -2px 0 #ff00c1;
}

.glitch:hover::after {
  animation: glitch-effect 2s infinite linear alternate-reverse;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  text-shadow: 2px 0 #00fff9;
}

/* Animación suave para el precio */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.hover\:scale-105:hover {
  transform: scale(1.05) translateY(-0.25rem);
}
</style>
