<template>
  <article>
    <div
      class="max-w-[300px] mx-auto h-full shadow-md shadow-bta-dark-blue transition-shadow duration-500"
    >
      <NuxtLink
        :to="'/articulos/' + article.slug"
        class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bta-pink group"
      >
        <div
          class="flex flex-col h-full bg-bta-dark-blue shadow-lg rounded-lg overflow-hidden"
        >
          <!-- Image -->
          <figure class="relative h-0 pb-[56.25%] overflow-hidden">
            <img
              class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              :src="article.image_thumb"
              width="320"
              height="180"
              alt="article"
            />
          </figure>
          <!-- Card Content -->
          <div class="flex-grow flex flex-col p-5">
            <!-- Card body -->
            <div class="flex-grow">
              <!-- Header -->
              <header class="mb-3 site-heading">
                <div class="glitch-parent">
                  <h3
                    class="glitch text-[22px] font-extrabold leading-snug font-oswald text-white"
                  >
                    <span aria-hidden="true">{{ article.title }}</span>
                    {{ article.title }}
                    <span aria-hidden="true">{{ article.title }}</span>
                  </h3>
                </div>
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

<script>
export default {
  name : 'CardArticle',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

}
</script>

<style scoped>
.glitch:hover{
  position: relative;
  text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
    0.025em 0.04em 0 #e7e413fd;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #0846ff, 0.025em 0.035em 0 #f90c0c,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #0846ff, 0.025em 0.035em 0 #f90c0c,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #0846ff, 0.03em 0 0 #f90c0c,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #0846ff, 0.03em 0 0 #f90c0c,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #0846ff, -0.025em -0.04em 0 #f90c0c,
      -0.04em -0.025em 0 #fffc00;
  }
}

</style>
