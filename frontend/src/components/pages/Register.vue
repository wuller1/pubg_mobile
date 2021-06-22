<template>
  <div>
    <!-- <input type="email" name="" id="" /> -->
    <el-input placeholder="email" v-model="email" clearable></el-input>
    <el-input placeholder="Пароль" v-model="password" show-password></el-input>
    <el-button @click="signup()" type="primary">Войти</el-button>
    <div v-if="success">Успешно!</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      success: false,
      isLoading: false,
    };
  },
  methods: {
    async signup() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("auth/signup", {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later";
      }

      this.isLoading = false;
    },
  },
  computed: {
    data() {
      return {};
    },
  },
};
</script>

<style scoped></style>
