<template>
  <div>
    <the-header></the-header>
    <the-main></the-main>
    <the-footer></the-footer>
  </div>
</template>
<style>
body {
  background: url("./assets/patch-section-bg-4b4bd9fba7.jpg");
  font-family: "PT Sans Narrow", sans-serif;
  padding: 0px;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
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
