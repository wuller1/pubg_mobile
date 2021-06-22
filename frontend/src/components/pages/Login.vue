<template>
  <div class="container">
    <!-- <input type="email" name="" id="" /> -->
    <form @submit.prevent="signup">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- <el-input placeholder="email" v-model="email" clearable></el-input>
    <el-input placeholder="Пароль" v-model="password" show-password></el-input>
    <el-button @click="signup()" type="primary">Войти</el-button>
    <div v-if="success">Успешно!</div>
    <div v-if="error">{{ error }}</div>
    <div>{{ userId }}</div> -->
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
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later";
      }

      this.isLoading = false;
      // this.$router.push('/')
      this.$router.go(-1)
    },
  },
  computed: {
    userId() {
      return this.$store.state.token;
    },
  },
};
</script>

<style scoped></style>
