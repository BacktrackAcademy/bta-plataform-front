<template>
  <div>
 

    <div>
      <h2 class="font-oswald uppercase  font-semibold justify-center text-4xl text-center py-32">Catálogo de cursos</h2>
    </div>
    <div class="grid grid-cols-4 gap-8 mx-32">
      <div v-for="(course, i) in courses" :key="i" >
        
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
                <NuxtLink 
                  class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                  :to="'/curso/' + course.slug"
                >
                  Preview
                </NuxtLink>
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
      })
      .catch((error) => console.log(error));
    }
  }
}
</script>
