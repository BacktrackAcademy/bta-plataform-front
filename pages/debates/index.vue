<template>
  <main class="px-4 sm:px-6 lg:px-8 bg-bta-section pb-12">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-3xl font-semibold font-oswald text-white mt-4 mb-10">
        Preguntas y <span class="text-bta-pink">respuestas</span>
      </h1>
      <div class="grid grid-cols-1 gap-7 overflow-hidden">
        <LazyCardDebate
          v-for="discussion in discussions"
          :key="discussion.id"
          :discussion="discussion"
        />
      </div>
    </div>
  </main>
</template>

<script>
import CardDebate from "~/components/CardDebate.vue";

export default {
  name: "DebatesPage",
  components: { CardDebate },

  // get debates
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/api/v1/discussions");
    return { discussions: data.data };
  },

  // seo
  head() {
    return {
      title: "Debates",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Preguntas y respuestas",
        },
      ],
    };
  },
}
</script>
