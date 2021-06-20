<template>
  <el-container>
    <el-header> <the-header></the-header> </el-header>
    <el-main><the-main></the-main></el-main>
    <the-footer></the-footer>
  </el-container>
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
