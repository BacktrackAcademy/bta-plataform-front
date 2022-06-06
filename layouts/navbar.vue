<template>
  <div v-if="$auth.loggedIn">
    <Nuxt />
  </div>
  <div v-else>
    <Login/>
  </div>
</template>
<script>
import Login from '../pages/Login/index.vue'
import Header from '../components/header.vue';
export default {
    components: {
    Login,
    Header
},
  };
</script>
