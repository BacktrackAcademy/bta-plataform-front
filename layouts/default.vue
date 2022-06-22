<template>
  <div v-if="$auth.loggedIn">
    <Navbarloged/>
    <Nuxt class="pt-20"/>
    <Footer />
  </div>
  <div v-else>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script >
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Navbarloged from "../components/Navbarloged.vue";
export default {
  components: {
    Header,
    Footer,
    Navbarloged
},
};
</script>
