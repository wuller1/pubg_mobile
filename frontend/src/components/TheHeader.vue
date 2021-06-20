<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">PUBG mobile</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Домой</router-link
            >
            <router-link class="nav-link" to="/tournaments"
              >Турниры</router-link
            >
            <router-link class="nav-link" to="/admin">Админ</router-link>
            <router-link v-if="!isLoggedIn" class="nav-link" to="/login"
              >Войти</router-link
            >
            <router-link
              v-else
              @click="logout"
              class="nav-link"
              to="/tournaments"
              >Выйти</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router="true"
  >
    <el-menu-item index="/">Домой</el-menu-item>
    <el-menu-item index="/tournaments">Турниры</el-menu-item>
    <el-menu-item index="/admin">Админ</el-menu-item>
    <el-menu-item index="/about">О нас</el-menu-item>
    <el-menu-item index="/contact">Контакты</el-menu-item>
    <el-menu-item index="/profile">Профиль</el-menu-item>
    <el-menu-item v-if="!loggedIn" index="/login">Войти</el-menu-item>
    <el-menu-item index="/register">Зарегестрироваться</el-menu-item>
    <el-menu-item @click="logout">Выйти</el-menu-item>
    <el-menu-item>{{ isLoggedIn }}</el-menu-item>
  </el-menu> -->
</template>

<script>
import AxiosApi from "../AxiosApi";
export default {
  data() {
    return {
      loggedIn: false,
      role: "",
      userName: "",
      error: "",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    isadmin() {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
  async created() {
    try {
      this.tournaments = await AxiosApi.getTournaments();
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>
