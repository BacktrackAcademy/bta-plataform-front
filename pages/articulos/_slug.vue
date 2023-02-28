<template>
  <section class="bg-bta-dark-blue">
    <div class="w-[800px] mx-auto">
      <article>
        <header>
          <img :src="article.image_thumb" alt="article" />
          <h1 class="mt-5 text-white font-semibold font-oswald text-3xl">
            {{ article.title }}
          </h1>
        </header>
      </article>
    </div>
  </section>
</template>


<script>
export default {
  name: 'ArticleSlug',
  data() {
    return {
      article: null
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get(`/api/v1/article/${params.slug}`);
    return { article: data.data };
  },
}

</script>
