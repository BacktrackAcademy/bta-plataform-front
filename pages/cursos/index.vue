<template>
  <div>
    <main class="bg-bta-section mx-auto sm-px-6">
      <div class="flex bg-bta-dark-blue">
        <!-- Filters -->
        <form class="hidden lg:block w-3/12 px-[1%] xl:px-[3%] relative h-screen overflow-y-auto">
          <!-- <h3 class="sr-only">Tipos</h3>
          <ul role="list"
            class="text-sm font-medium font-inconsolata text-white space-y-4 pb-6 border-b border-gray-border">
            <li>
              <a href="#"> Recomendado</a>
            </li>

            <li>
              <a href="#"> Todos </a>
            </li>

            <li>
              <a href="#"> Gratis </a>
            </li>

            <li>
              <a href="#"> Premiun </a>
            </li>
          </ul> -->

          <div class="relative">
            <input id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer">

            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Categorías
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>

            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <!-- Filter section, show/hide based on section state. -->
            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">
                <div v-for="(category, i) in categories" :key="i">
                  <div class="flex items-center gap-2 ">
                    <label :for="category.name"
                      class="label-container text-sm items-center gap-2 font-sans text-white relative select-none cursor-pointer">

                      <input :id="category.name" name="size[]" :value="category.id" type="checkbox"
                        v-model="category_ids"
                        class="absolute opacity-0 cursor-pointer h-0 w-0 border-gray-300 rounded focus:ring-indigo-500">

                      <div class="cursor-pointer h-2 w-2 bg-inherit"></div>
                      <h3>{{ category.name}}</h3>

                      <label class="text-gray-muted hover:text-white">
                        {{ category.number_courses }}</label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <input id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer">
            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Dificultad
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>
            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">

                <div v-for="(level, i) in levels" :key="i">
                  <div class="flex items-center gap-2">
                    <label :for="level.name"
                      class="label-container text-sm items-center gap-2 font-sans text-white relative select-none cursor-pointer">

                      <input :id="level.name" name="size[]" :value="level.id" type="checkbox" v-model="level_ids"
                        class="absolute opacity-0 cursor-pointer h-0 w-0 border-gray-300 rounded focus:ring-indigo-500">
                      <div class="cursor-pointer h-2 w-2 bg-inherit"></div>
                      <h3>{{ level.name}}</h3>

                      <label class="text-gray-muted font-inconsolata hover:text-white">{{ level.number_courses
                        }}</label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <input id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Docentes
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>
            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <!-- Filter section, show/hide based on section state. -->
            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">

                <div v-for="(teacher, i) in teachers" :key="i">
                  <div class="flex items-center">
                    <label :for="teacher.name"
                      class="label-container text-sm items-center gap-2 font-sans text-white relative select-none cursor-pointer">

                      <input :id="teacher.name" name="size[]" :value="teacher.id" type="checkbox" v-model="user_ids"
                        class="absolute opacity-0 cursor-pointer h-0 w-0 border-gray-300 rounded focus:ring-indigo-500">
                      <div class="cursor-pointer h-2 w-2 bg-inherit"></div>
                      <h3>{{ teacher.name }} {{ teacher.lastname }} </h3>
                      <label class="text-gray-muted font-inconsolata hover:text-white"> {{ teacher.number_courses
                        }}</label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="lg:col-span-3 bg-bta-blue w-full lg:w-9/12 h-screen overflow-y-auto px-4 sm:px-6 xl:px-8">

          <div class="lg:h-full">
            <div class="py-10">
              <h1 class="text-white text-3xl lg:text-4xl xl:text-5xl font-oswald font-semibold">
                Cursos de hacking ético</h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="(course, i) in courses" :key="i">
                <div
                  class="max-w-[300px] mx-auto h-full shadow-md shadow-bta-dark-blue transition-shadow duration-500 ">
                  <NuxtLink :to="'/curso/' + course.slug"
                    class=" focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-bta-pink group">
                    <div class="flex flex-col h-full bg-bta-dark-blue shadow-lg rounded-lg overflow-hidden">
                      <!-- Image -->
                      <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          :src="course.image_thumb" width="320" height="180" alt="Course" />
                      </figure>
                      <!-- Card Content -->
                      <div class="flex-grow flex flex-col p-5">
                        <!-- Card body -->
                        <div class="flex-grow">
                          <!-- Header -->
                          <header class="mb-3 site-heading">
                            <div class="glitch-parent">
                              <h3 class="glitch text-[22px] font-extrabold leading-snug font-oswald text-white">
                                <span aria-hidden="true">{{ course.titulo}}</span>
                                {{ course.titulo}}
                                <span aria-hidden="true">{{ course.titulo}}</span>
                              </h3>
                            </div>
                          </header>
                          <!-- Content -->
                          <div class="mt-4 h-1 w-12 bg-bta-pink group-hover:animate-fast-pulse"></div>
                          <div class="mb-8 text-gray-muted font-inconsolata">
                            <p class="py-2">{{ course.shortdes }}</p>
                          </div>
                        </div>
                        <!-- Card footer -->
                        <div class="flex justify-end space-x-2">
                          <p
                            class="font-inconsolata text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-muted hover:underline focus:outline-none focus-visible:ring-2">
                            {{ course.total_length }}</p>
                          <a v-if="course.price == 0 || course.price == null"
                            class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-bta-pink/95 focus:outline-none focus-visible:ring-2 hover:bg-bta-pink text-white">
                            Gratis </a>
                          <div v-else
                            class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-bta-pink/95 focus:outline-none focus-visible:ring-2 hover:bg-bta-pink text-white">
                            $ {{ course.price }}</div>
                        </div>
                      </div>
                    </div>

                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      courses: [],
      teachers: [],
      levels: [],
      categories: [],
      user_ids: [],
      level_ids: [],
      category_ids: [],
    }
  },
  mounted() {
    this.getCourses();
    this.getTeachers();
    this.getLevels();
    this.getCategories();
  },
  watch:{
    level_ids(){
      this.getCourses()
    },
    category_ids(){
      this.getCourses()
    },
    user_ids(){
      this.getCourses()
    }
  },
  methods: {
    getCourses() {
      this.$axios.get("api/v1/courses", {
        params: {
          user_ids: this.user_ids,
          level_ids: this.level_ids,
          category_ids: this.category_ids,
        }
      }).then((response) => {
        this.courses = response.data;
      })
        .catch((error) => console.log(error));
    },
    getTeachers() {
      this.$axios.get("api/v1/teacher").then((response) => {
        this.teachers = response.data;
      })
        .catch((error) => console.log(error));
    },
    getLevels() {
      this.$axios.get("api/v1/level").then((response) => {
        this.levels = response.data;
      })
        .catch((error) => console.log(error));
    },
    getCategories() {
      this.$axios.get("api/v1/category").then((response) => {
        this.categories = response.data;
      })
        .catch((error) => console.log(error));
    },

  },

  // SEO Meta Tags
  head: {
    title: "Cursos de Hacking Ético - Backtrack Academy",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Únete gratis y comienza a aprender seguridad informatica desde cero con los mejores hackers.'
      },
      {
        hid: 'keywords',
        name: 'description',
        content: 'Gratis, Hacking, Wireshark, Hacker, Python, Android, Informatica, Seguridad, Academy, Online, Cursos, JavaScript'
      }
    ]
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

.label-container{
  display: flex;
}
.label-container:hover input ~ div {
  @apply bg-gray-muted;
}
.label-container input:checked ~ div {
  @apply bg-bta-pink shadow-2xl shadow-bta-pink;
}

</style>
