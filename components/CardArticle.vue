<script setup lang="ts">
interface Article {
  title: string
  image_thumb_service: string
  short: string
  slug: string
}

defineProps<{
  article: Article
}>()
</script>

<template>
  <article>
    <div
      class="max-w-[300px] mx-auto h-full shadow-md shadow-bta-dark-blue transition-shadow duration-500"
    >
      <NuxtLink
        :to="`/articulos/${article.slug}`"
        class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bta-pink group"
      >
        <div
          class="flex flex-col h-full bg-bta-dark-blue shadow-lg rounded-lg overflow-hidden"
        >
          <!-- Image -->
          <figure class="relative h-0 pb-[56.25%] overflow-hidden">
            <NuxtImg
              class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              :src="article.image_thumb_service"
              width="320"
              height="180"
              alt="article"
              loading="lazy"
            />
          </figure>
          <!-- Card Content -->
          <div class="flex-grow flex flex-col p-5">
            <!-- Card body -->
            <div class="flex-grow">
              <!-- Header -->
              <header class="mb-3 site-heading">
                <h3
                  class="font-bold leading-snug font-oswald text-white text-2xl glitch" :data-text="article.title"
                >
                  {{ article.title }}
                </h3>
              </header>
              <!-- Content -->
              <div class="mb-8 text-gray-muted font-inconsolata line-clamp-3">
                <p>{{ article.short }}</p>
              </div>
            </div>
            <!-- Card footer -->
            <div class="flex space-x-2">
              <span class="text-white transition duration-300 group-hover:text-blue-500 font-inconsolata">
                Continuar Leyendo
              </span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
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
