<template>
  <section class="bg-bta-dark-blue px-4 sm:px-6 lg:px-8">
    <div class="max-w-[800px] mx-auto">
      <article>
        <header class="mb-4">
          <img :src="article.image_thumb" alt="article" />
          <h1 class="mt-5 text-white font-semibold font-oswald text-3xl">
            {{ article.title }}
          </h1>
        </header>
        <div class="text-white font-inconsolata">
          {{ article.short }}
        </div>
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
    console.log(data);
    console.log(params);
    return { article: data };
  },
}
</script>
