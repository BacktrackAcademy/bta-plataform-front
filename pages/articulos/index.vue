<template>
  <main class="bg-bta-dark-blue px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-3xl font-semibold font-oswald text-white mt-4 mb-10">
        Noticias sobre <span class="text-bta-pink">seguridad</span>
      </h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardArticle
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </main>
</template>

<script>
import CardArticle from "~/components/CardArticle.vue";

export default {
  name: "ArticlesPage",
  components: { CardArticle },

  async asyncData({ $axios }) {
    const { data } = await $axios.get("/api/v1/articles");
    return { articles: data.data };
  },


  head() {
    return {
      title: "Artículos",
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
