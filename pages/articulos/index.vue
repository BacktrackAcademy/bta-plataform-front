<template>
  <main class="bg-bta-blue px-4 sm:px-6 lg:px-8 pb-12">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-3xl font-semibold font-oswald text-white my-7">
        Noticias sobre <span class="text-bta-pink">seguridad</span>
      </h1>
      <div v-if="isLoading" class="grid place-content-center min-h-[calc(100vh-120px)]">
        <IconsSpinner />
      </div>
      <template v-else>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 py-5">
          <CardArticle v-for="article in articles" :key="article.id" :article="article" />
        </div>
        <div class="py-5 flex justify-center items-center">
          <IconsSpinner v-if="isLoadingMore" />
          <div class="text-center" v-else>
            <button
              v-if="page < totalPages"
              class="text-sm bg-bta-pink text-white px-6 py-2 rounded font-medium"
              @click="getMoreArticles"
            >
              Cargas más artículos
            </button>
          </div>
        </div>
      </template>
    </div>
    <div class="back-to-top h-14 w-14 fixed right-5 bottom-4 z-10">
      <button v-show="showButton" class="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out" @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full text-bta-pink">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

  </main>
</template>

<script>
import CardArticle from "~/components/CardArticle.vue";

export default {
  name: "ArticlesPage",
  components: { CardArticle },

  data() {
    return {
      articles: [],
      isLoading: false,
      page: 1,
      perPage: 12,
      totalPages: null,
      isLoadingMore: false,
      showButton: false,
    };
  },

  created() {
    this.getArticles();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.showButton = window.pageYOffset > 400;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    getArticles() {
      this.isLoading = true;
      this.$axios
        .get("/api/v1/articles", {
          params: {
            per_page: this.perPage,
            page: this.page,
          },
        })
        .then((response) => {
          this.articles = response.data.data;
          this.totalPages = response.data.total_pages;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false
        });
    },

    getMoreArticles() {
      this.isLoadingMore = true;
      if (this.page >= this.totalPages) return;
      this.page++;
      this.$axios
        .get("/api/v1/articles", {
          params: {
            per_page: this.perPage,
            page: this.page,
          },
        })
        .then((response) => {
          this.articles = this.articles.concat(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoadingMore = false
        });
    },
  },

  head() {
    return {
      title: "Artículos - Backtrack Academy",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Artículos sobre seguridad informática",
        },
      ],
    };
  },
};
</script>
