<template>
  <div class="pt-32">
    <div class="container min-h-screen bg-bta-dark-blue text-white mx-auto px-4 lg:pl-[8%]">
      <p>Curso</p>
      <h1>{{course.titulo}}</h1>
      <p>{{course.descripcion}}</p>
      <NuxtLink to="/cursos">Regresar a cursos</NuxtLink>
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
</style>