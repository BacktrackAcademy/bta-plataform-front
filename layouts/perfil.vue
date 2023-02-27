<template>
  <div v-if="$auth.loggedIn">
    <Navbarloged/>
    <NavbarPerfil class="pt-20" />
    <Nuxt />
    <Footer />
  </div>
</template>
<script >
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Navbarloged from "../components/Navbarloged.vue";
import NavbarPerfil from "../components/NavbarPerfil.vue";
export default {
  components: {
    Header,
    Footer,
    Navbarloged,
    NavbarPerfil,
  },
};
</script>
