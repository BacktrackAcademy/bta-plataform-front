<script setup lang="ts">
useSeoMeta({
  description: 'Diversos cursos esperan por tí. No esperes más, regístrate y comienza a adquirir una nueva habilidad de inmediato.',
  ogTitle: 'Cursos online de Hacking ético - Backtrack Academy',
  ogDescription: 'Diversos cursos esperan por tí. No esperes más, regístrate y comienza a adquirir una nueva habilidad de inmediato.',
  ogImage: '/og-image.png',
  ogUrl: 'https://backtrackacademy.com',
  twitterTitle: 'Cursos online de Hacking ético - Backtrack Academy',
  twitterDescription: 'Diversos cursos esperan por tí. No esperes más, regístrate y comienza a adquirir una nueva habilidad de inmediato.',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})
// export default {
// auth: false,
// data() {
//   return {

//   }
// },
// beforeCreate(){
//   if (this.$auth.loggedIn) {
//   this.$router.push('/cursos')
//   }
// },
</script>

<template>
  <div>
    <section class="bg-bta-hero bg-cover bg-no-repeat bg-right min-h-[calc(100vh-90px)] flex  items-center py-20">
      <div class="container mx-auto w-full">
        <div class="max-w-xl lg:max-w-2xl">
          <h1 class="font-semibold font-oswald text-4xl xl:text-5xl text-white mb-2 leading-tight">
            DESARROLLA TUS HABILIDADES EN CIBERSEGURIDAD CON NUESTRA PLATAFORMA
          </h1>
          <p class="text-[#cacaca] text-lg font-inconsolata py-6">
            Te acompañamos para que te conviertas en un especialista del Hacking.
          </p>
          <button class="px-5 py-4 text-white bg-bta-pink font-oswald text-base font-normal uppercase leading-snug duration-200 transition-all hover:bg-bta-pink/80">
            Regístrate ahora
          </button>
        </div>
      </div>
    </section>

    <section class="bg-bta-dark-blue container py-20 lg:py-32">
      <div class="w-full max-w-5xl mx-auto">
        <hr class="mb-6">
        <p class=" text-white text-center text-base md:text-xl lg:text-2xl font-inconsolata pt-20 leading-normal">
          Brindamos la experiencia de los mejores profesionales a través de una ruta de aprendizaje que contiene
          cursos, exámenes,ejercicios prácticos y laboratorios. Todos nuestros contenidos son realizados con el fin de
          que cumplas tus objetivos en el mundo de la ciberseguridad.
        </p>
      </div>
    </section>

    <section class="bg-bta-section pt-20">
      <div class="container">
        <h2 class="text-3xl md:text-4xl text-center font-oswald font-bold text-white mb-4">
          ¿Por qué escoger Backtrack Academy?
        </h2>
        <p class="text-xl md:text-2xl text-center text-white font-inconsolata">
          La mejor manera de convertirse en un experto es aprendiendo de uno
        </p>
        <div class="relative w-full pt-20 lg:pt-32">
          <!-- Imagen central fija -->
          <img
            class="w-2/3 sm:w-1/3 relative bottom-0 left-1/2 transform -translate-x-1/2"
            src="https://djo7sloxtuec0.cloudfront.net/assets/carlos-55d61e9f5bc6b70c7f67eb0699ed1f7a07f5777d0de44eca2ae81c4308ec61c1.png"
          >
          <!-- Certificado (solo desktop) -->
          <img
            loading="lazy"
            class="w-[30%] md:w-[24%] hidden absolute sm:block left-20 lg:translate-x-[20%] top-20 lg:translate-y-[15%]"
            src="https://djo7sloxtuec0.cloudfront.net/assets/certificate-ecb2f102d520698824dbc345b53980acd944814dcefd2d369c661d3d18f77430.png"
          >
          <!-- Imágenes laterales (solo desktop) -->
          <img
            loading="lazy"
            class="w-[200px] hidden lg:block absolute right-[26%] top-7"
            src="https://djo7sloxtuec0.cloudfront.net/assets/members-b3cc531f670447f559f40e08b79d1c644c32394466d0648e0a814bd8a6ab86fd.png"
          >
          <img
            loading="lazy"
            class="hidden w-[340px] lg:block absolute lg:top-12 lg:right-[25%] lg:bottom-5 lg:translate-x-1/2 lg:translate-y-1/2"
            src="https://djo7sloxtuec0.cloudfront.net/assets/prototype-9f81009242eeb35267bdd9e6c4f77dd41d1869f6ed8ed08f2d23d8a21e118135.png"
          >
        </div>
      </div>
    </section>
    <section class="bg-bta-dark-blue py-20 lg:py-32 container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20 text-center mb-20">
        <div class="p-6 lg:p-12">
          <h3 class="text-[28px] uppercase font-oswald text-white mb-5">
            Sigue nuestra ruta de aprendizaje
          </h3>
          <p class="text-base text-white font-inconsolata">
            Nuestras especialidades están preparada por expertos en ciberseguridad con un enfoque teórico-práctico.
          </p>
        </div>
        <div class="p-6 lg:p-12">
          <h3 class="text-[28px] uppercase font-oswald text-white mb-5">
            Obtén experiencia real
          </h3>
          <p class="text-base text-white font-inconsolata">
            Contamos con cursos que poseen el contenido y herramientas utilizados en la industria, con un aprendizaje que combina la instrucción audiovisual con aplicación práctica.
          </p>
        </div>
        <div class="p-6 lg:p-12">
          <h3 class="text-[28px] uppercase font-oswald text-white mb-5">
            Recibe orientación y apoyo
          </h3>
          <p class="text-base text-white font-inconsolata">
            Nuestros mentores están dedicados y al tanto de tu avance, te guiarán por el camino indicado y te motivarán para cumplir los objetivos que te propusiste al principio.
          </p>
        </div>
      </div>
      <div class="text-center">
        <a href="" class="font-oswald font-normal text-white inline-block bg-bta-pink border border-bta-pink py-3 px-5 whitespace-nowrap leading-6 uppercase duration-200 transition-all hover:bg-bta-pink/80">Regístrate ahora</a>
      </div>
    </section>

    <section class="bg-bta-section py-20 lg:py-32">
      <div class="max-w-[650px] mx-auto py-0 px-[5%] text-center">
        <h3 class="font-oswald text-4xl text-white mb-6">
          Comienza tu carrera en Ciberseguridad
        </h3>
        <p class="font-inconsolata text-base md:text-xl lg:text-2xl text-white">
          Áreas de aprendizaje que te ayudarán a cumplir los objetivos que te propongas en el mundo de la ciberseguridad.
        </p>
      </div>
    </section>
  </div>
</template>

<style>
::-webkit-scrollbar {
  background: transparent;
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:active {
  background: #EC1075;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

.origin-bottom-center {
  transform-origin: bottom center;
}
</style>
