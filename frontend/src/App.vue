<template>
  <div>
    <the-header></the-header>
    <div class="main"><the-main></the-main></div>
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
.main {
  margin-top: 80px;
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
