<template>
  <div class="bg-bta-section pt-32 min-h-screen">
    <div class=" min-h-[300px] text-white mx-auto p-5 lg:mx-[8%] bg-bta-dark-blue rounded flex gap-4">
      <div class="w-3/5">
        <p class="font-inconsolata text-sm">Curso</p>
        <h1 class="font-oswald font-bold text-5xl mb-3">{{course.titulo}}</h1>
        <p>{{course.descripcion}}</p>

        <NuxtLink to="/cursos" class="">Regresar a cursos</NuxtLink>
      </div>
      <div>
        <p class="font-inconsolata text-sm">Suscríbete por</p>
        <p class="font-bold text-4xl mb-3">{{course.price}} USD</p>
        <NuxtLink to="/" class="btn-bta"> Comprar suscripción mensual</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'courseIndvPage',

  data() {
    return {
      course: [],
    }
  },
  mounted() {
    this.getCourse();
  },
  methods: {
    getCourse() {
      this.$axios.get(`api/v1/course/${this.$route.params.slug}`).then((response) => {
        this.course = response.data;
      })
        .catch((error) => console.log(error));
    }

    // getCourses() {
    //   this.$axios.get("api/v1/courses").then((response) => {
    //     this.courses = response.data;
    //     const filteredCourse = this.courses.find(
    //       (el)=>
    //       el.titulo === this.$route.params.id
    //     )

    //     if(filteredCourse) {
    //       // return {
    //       //   course: filteredCourse.titulo
    //       // }
    //       this.course = filteredCourse
    //     } else {
    //       // redirect('/')
    //     }
    //   })
    //     .catch((error) => console.log(error));
    // }

  }
}
</script>

<style>
.btn-bta {
  @apply text-base px-5 py-4 font-oswald uppercase text-white bg-bta-pink border border-bta-pink inline-block mb-0 font-normal text-center align-middle whitespace-nowrap duration-200
}
</style>