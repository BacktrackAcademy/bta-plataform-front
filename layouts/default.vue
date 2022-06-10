<template>
  <div v-if="$auth.loggedIn">
    <LoogedNavbar />
    <Nuxt class="pt-20"/>
  </div>
  <div v-else>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from "../components/header.vue";
import LoogedNavbar from "../components/LoogedNavbar.vue";
export default {
  components: {
    Header,
    LoogedNavbar,
  },
};
</script>
