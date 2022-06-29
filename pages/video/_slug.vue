<template>
  <section class="bg-bta-section">
    <div class="flex lg:mx-10 mt-2">

      <div class=" lg:w-9/12 ">
        <!-- <div>
          <h1 class="text-4xl text-white font-medium font-oswald mb-3">Nombre del video</h1>
        </div> -->
        <!-- Video player -->
        <div class="relative top-0 max-h-[calc(100vh - 52px)] lg:min-w-[1024px] mx-auto">
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/150485199?h=0eb117b38a&title=0&byline=0&portrait=0&badge=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
        </div>

        <div>
          <!-- curso Header -->
          <div class="flex items-center justify-between">

            <div class="flex items-center pt-4">
              <img src="https://api.lorem.space/image/pizza?w=40&h=40&hash=b9b26us7" alt=""
                class="mr-3 w-12 h-12 rounded-full">
              <!-- header content -->
              <div class="flex flex-wrap">
                <a href="" class="block w-full">
                  <h2 class="text-white font-normal text-base">Nombre del curso</h2>
                </a>
                <img src="https://api.lorem.space/image/face?w=30&h=30&hash=l6rom7bp" alt=""
                  class="w-6 h-6 rounded-full mr-1">
                <p class="text-gray-muted">Thomas Rodriguez</p>
              </div>
            </div>

            <div>
              <button
                class="flex items-center bg-bta-pink text-white px-3 py-2 w-[144px] rounded-[8px] mr-2">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-to-right"
                  class="inline-block text-inherit w-4 overflow-visible mr-3" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M200.1 99.5l148.4 148c4.7 4.7 4.7 12.3 0 17l-148.4 148c-4.7 4.7-12.3 4.7-17 0l-19.6-19.6c-4.8-4.8-4.7-12.5.2-17.1l97.1-93.7H12c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h248.8l-97.1-93.7c-4.8-4.7-4.9-12.4-.2-17.1l19.6-19.6c4.7-4.9 12.3-4.9 17-.2zM396 76v360c0 6.6 5.4 12 12 12h28c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12z">
                  </path>
                </svg>
                <span class="uppercase text-left text-sm font-bold w-[137px] text-ellipsis whitespace-nowrap overflow-hidden">Probando el
                  router</span>
              </button>
            </div>
          </div>

          <div class="pt-2 flex justify-between ">
            <!-- header class -->
            <div class="flex items-center">
              <h1 class="text-2xl text-white font-bold leading-9 my-4">01- Presentacion threat Hunting</h1>
              <span class="text-[#cacaca] ml-3">1/20</span>
            </div>
            <div> soy bandera</div>
          </div>

          <div class="text-white font-inconsolata">
            <p>Resumen del curso</p>
            <p>
              <b>01:40 hrs</b> 84 personas han estudiado este curso.
            </p>
            <p>
              Los ciberdelincuentes son cada vez más astutos y capaces de evadir los sistemas de defensa más
              sofisticados. Por eso debemos ser proactivos a través de nuestras redes para detectar y aislar amenazas
              avanzadas que puedan evadir nuestros sistemas de defensa.
            </p>
          </div>

        </div>

      </div>

      <div class="lg:w-3/12 p-4">
        <!-- badge -->
        <div class="text-[#cacaca] text-center mb-5">
          <p class="font-inconsolata">Has estudiado</p>
          <p class="font-oswald font-medium text-7xl mb-3">0%</p>
          <p class="font-inconsolata">del curso <span class="text-white">Threat Hunting</span></p>
          <br>
          <p class="font-inconsolata">Tienes 3 oportunidades</p>
        </div>
        <!-- Temario -->
        <div>
          <h4 class="text-2xl text-white font-oswald font-medium mt-5 mb-3">Temario</h4>
          <div v-for="video in videos" :key="video.id">
            <a :href="'/video/' + video.slug" class="block w-full py-4">
              <p class="text-white font-normal text-base">{{ video.titlevideo }}</p>
            </a>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {

  data() {
    return {
      course: [],
      syllabus: [],
      videos: [],
    }
  },

  created() {
    this.getCourse();
  },
  methods: {
    getCourse() {
      this.$axios.get(`api/v1/course/${this.$route.params.slug}`).then((response) => {
        this.course = response.data;
        this.syllabus = response.data.syllabus;
        this.videos = response.data.syllabus[0].videos;;
      })
    }
  },

}
</script>

<style>

</style>