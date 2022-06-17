<template>
  <div v-if="$auth.loggedIn">
    <LoogedNavbar />
    <Nuxt class="pt-20"/>
    <Footer />
  </div>
  <div v-else>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/header.vue";
import LoogedNavbar from "../components/LoogedNavbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Header,
    LoogedNavbar,
    Footer
  },
};
</script>
