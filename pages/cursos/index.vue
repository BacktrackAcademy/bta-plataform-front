<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-white overflow-hidden bg-black h-screen">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 xl:pt-40">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl font-oswald uppercase tracking-tight font-medium text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block text-white xl:inline">Desarrolla tus habilidades en ciberseguridad con</span>
                <span class="block text-white xl:inline">nuestra plataforma</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Te acompañamos para que te conviertas en un especialista del Hacking.</p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="">
      </div>
    </div>

    <div>
      <h2 class="font-oswald uppercase  font-semibold justify-center text-4xl text-center py-32">Catálogo de cursos</h2>
    </div>
    <div class="grid grid-cols-4 gap-8 mx-32">
      <div v-for="course in courses">
        
        <div class="max-w-xs mx-auto">
          <div class="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
            <!-- Image -->
            <a class="block focus:outline-none focus-visible:ring-2" href="#0">
              <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="course.image_thumb" width="320" height="180" alt="Course">
              </figure>
            </a>
            <!-- Card Content -->
            <div class="flex-grow flex flex-col p-5">
              <!-- Card body -->
              <div class="flex-grow">
                <!-- Header -->
                <header class="mb-3">
                  <a class="block focus:outline-none focus-visible:ring-2" href="#0">
                    <h3 class="text-[22px] text-gray-900 font-extrabold leading-snug">{{ course.titulo }}</h3>
                  </a>
                </header>
                <!-- Content -->
                <div class="mb-8">
                  <p>{{ course.shortdes }}</p>
                </div>
              </div>
              <!-- Card footer -->
              <div class="flex justify-end space-x-2">
                <a class="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">Cancel</a>
                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a>
                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white" href="#0">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      courses: [],
    }
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    getCourses() {
      this.$axios.get("api/v1/courses").then((response) => {
        this.courses = response.data;
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}
</script>
