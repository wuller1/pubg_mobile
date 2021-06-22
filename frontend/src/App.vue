<template>
  <div>
    <the-header></the-header>
    <the-main></the-main>
    <the-footer></the-footer>
  </div>
</template>
<style></style>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { TheHeader, TheMain, TheFooter },
  created() {
    this.$store.dispatch("auth/autoLogin");
  },
};
</script>
