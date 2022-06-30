<template>
  <div>
    <section class="bg-bta-hero bg-cover bg-no-repeat bg-right min-h-screen ">
      <div class="px-3 mx-auto">
        <div class="pt-44 lg:ml-[8.3333%] max-w-xl lg:max-w-2xl ">
          <h1 class="font-semibold font-oswald text-5xl text-white mb-2 leading-tight">
            DESARROLLA TUS HABILIDADES EN CIBERSEGURIDAD CON NUESTRA PLATAFORMA
          </h1>
          <p class="text-[#cacaca] text-lg font-inconsolata py-6">
            Te acompañamos para que te conviertas en un especialista del Hacking.
          </p>
          <button class="px-5 py-4 text-white bg-bta-pink font-oswald text-base font-normal leading-snug">
            REGISTRATE AHORA
          </button>
        </div>
      </div>
    </section>

    <section class="bg-bta-dark-blue">
      <div class="w-full xl:w-8/12 mx-auto px-4">
        <hr class="mb-6">
        <p class=" text-white text-center text-3xl font-inconsolata pt-16 leading-normal">
          Brindamos la experiencia de los mejores profesionales a través de una ruta de aprendizaje que contiene
          cursos, exámenes,ejercicios prácticos y laboratorios. Todos nuestros contenidos son realizados con el fin de
          que cumplas tus objetivos en el mundo de la ciberseguridad.
        </p>
      </div>
    </section>

    <section class="bg-bta-section flex flex-col pb-0">
      <div class="w-full sm:w-full md:w-10/12 mx-auto px-4 mt-12">
        <h2 class="text-4xl text-center font-oswald font-bold text-white mb-2">
          ¿Por qué escoger Backtrack Academy?
        </h2>
        <p class="text-2xl text-center text-white font-inconsolata">
          La mejor manera de convertirse en un experto es aprendiendo de uno
        </p>
      </div>
      <div class="transform scale-40 lg:scale-80 origin-bottom-center">
        <div class="flex justify-center items-center">
          <img loading="lazy" class="absolute -translate-x-[80%] -translate-y-[15%] "
            src="https://djo7sloxtuec0.cloudfront.net/assets/certificate-ecb2f102d520698824dbc345b53980acd944814dcefd2d369c661d3d18f77430.png">
          <img loading="lazy" class="relative"
            src="https://djo7sloxtuec0.cloudfront.net/assets/carlos-55d61e9f5bc6b70c7f67eb0699ed1f7a07f5777d0de44eca2ae81c4308ec61c1.png">
          <img loading="lazy" class="absolute ml-[500px] translate-x-1/2 translate-y-1/2 -top-[320px]"
            src="https://djo7sloxtuec0.cloudfront.net/assets/members-b3cc531f670447f559f40e08b79d1c644c32394466d0648e0a814bd8a6ab86fd.png">
          <img loading="lazy" class="absolute top-12 ml-[500px] bottom-5 translate-x-1/2 translate-y-1/2"
            src="https://djo7sloxtuec0.cloudfront.net/assets/prototype-9f81009242eeb35267bdd9e6c4f77dd41d1869f6ed8ed08f2d23d8a21e118135.png">
        </div>

      </div>
    </section>
    <section class="bg-bta-dark-blue">
      <div class="flex justify-center gap-20 text-center mb-36 flex-wrap py-0 px-[5%]">
        <div class="w-[340px]">
          <p class="text-[28px] uppercase font-oswald text-white mb-5">Sigue nuestra ruta de aprendizaje</p>
          <p class="text-base text-white font-inconsolata">
            Nuestras especialidades están preparada por expertos en ciberseguridad con un enfoque teórico-práctico.
          </p>
        </div>
        <div class="w-[340px]">
          <p class="text-[28px] uppercase font-oswald text-white mb-5">Obtén experiencia real</p>
          <p class="text-base text-white font-inconsolata">
            Contamos con cursos que poseen el contenido y herramientas utilizados en la industria, con un aprendizaje que combina la instrucción audiovisual con aplicación práctica.
          </p>
        </div>
        <div class="w-[340px]">
          <p class="text-[28px] uppercase font-oswald text-white mb-5">Recibe orientación y apoyo</p>
          <p class="text-base text-white font-inconsolata">
            Nuestros mentores están dedicados y al tanto de tu avance, te guiarán por el camino indicado y te motivarán para cumplir los objetivos que te propusiste al principio.
          </p>
        </div>
      </div>
      <div class="text-center">
        <a href="" class="font-oswald font-normal text-white inline-block bg-bta-pink border border-bta-pink py-3 px-5 whitespace-nowrap leading-6 uppercase duration-200 transition-all">Regístrate ahora</a>
      </div>
    </section>

    <section class="bg-bta-dark-blue">
      <div class="m-w-[650px] mx-auto py-0 px-[5%] text-center">
        <h3 class="font-oswald text-4xl text-white">Comienza tu carrera en Ciberseguridad</h3>
        <p class="font-inconsolata text-2xl text-white">
          Áreas de aprendizaje que te ayudarán a cumplir los objetivos que te propongas en el mundo de la ciberseguridad.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {

    }
  },
  beforeCreate(){
    if (this.$auth.loggedIn) {
    this.$router.push('/cursos')
    }
  },

  // SEO Meta Tags
  head: {
    title: "Cursos online de Hacking ético - Backtrack Academy",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Diversos cursos esperan por tí. No esperes más, regístrate y comienza a adquirir una nueva habilidad de inmediato.'
      }
    ]
  },
}
</script>
<style>
body {
  overflow: overlay;
}

::-webkit-scrollbar {
  background: transparent;
  width: 2px;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

section {
  @apply min-h-[600px] pt-20 pb-20 block;
}

.origin-bottom-center {
  transform-origin: bottom center;
}
</style>