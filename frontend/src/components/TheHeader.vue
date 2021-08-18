<template>
  <header id="navigation_main" class="sticky">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img src="../assets/LOGO.png" alt=""
        /></router-link>
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
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          ref="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <router-link
              @click="toggle"
              class="nav-link"
              aria-current="page"
              to="/"
              >ДОМОЙ</router-link
            >
            <router-link @click="toggle" class="nav-link" to="/tournaments"
              >ТУРНИРЫ</router-link
            >
            <router-link
              @click="toggle"
              v-if="isAdmin || isPublisher"
              class="nav-link"
              to="/admin"
              >АДМИН</router-link
            >
            <div class="space"></div>
            <!-- <form @submit.prevent="signup" class="d-flex">
              <input
                class="form-control me-2"
                type="text"
                placeholder="Имя пользователя"
              />
              <input
                class="form-control me-2"
                type="password"
                placeholder="Пароль"
              />
              <button
                class="btn btn-warning"
                @click="toggle"
                v-if="!isLoggedIn"
                to="/login"
                type="button"
              >
                Войти
              </button>
            </form> -->
            <router-link
              @click="toggle"
              v-if="!isLoggedIn"
              class="nav-link"
              to="/login"
              >ВОЙТИ</router-link
            >
            <router-link
              @click="toggle"
              v-if="!isLoggedIn"
              class="nav-link"
              to="/register"
              >ЗАРЕГЕСТРИРОВАТЬСЯ</router-link
            >
            <router-link
              @click="
                toggle();
                logout();
              "
              v-else
              class="nav-link"
              to="/tournaments"
              >ВЫЙТИ</router-link
            >
            <router-link class="nav-link" to="/profile">ПРОФИЛЬ</router-link>
            <router-link class="nav-link" to="/balance"
              >БАЛАНС: <span class="red">{{ balance }}</span> 🎟</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import AxiosApi from "../AxiosApi";
export default {
  data() {
    return {
      userName: "",
      error: "",
      balance: 0,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    isAdmin() {
      return this.$store.getters["auth/isAdmin"];
    },
    isPublisher() {
      return this.$store.getters["auth/isPublisher"];
    },
  },
  methods: {
    async getBalance() {
      const token = localStorage.getItem("token");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      let data = await fetch("/api/v1/auth/me", requestOptions);
      data = await data.json();
      const balance = data.data.balance;
      this.balance = balance;
    },
    toggle() {
      const menuToggle = this.$refs.navbarNavAltMarkup;
      const bsCollapse = new bootstrap.Collapse(menuToggle);
      bsCollapse.toggle();
    },
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
  async created() {
    this.getBalance();
  },
};
</script>

<style scoped>
#navbarNavAltMarkup {
  color: black;
}
a {
  text-decoration: none;
}

.red {
  color: red;
  font-weight: bold;
}
.navbar {
  background-color: #ffde40;
  padding: 0px;
}
.nav-link {
  color: #9c4100;
  font-weight: bold;
  height: 100%;
  margin: 0px;
  padding: 16px;
  border-bottom: 3px solid #ffde40;
  border-top: 3px solid #ffde40;
}
.nav-link:hover {
  background-color: #ebb014;
  border-bottom: 3px solid #9c4100;
  border-top: 3px solid #ebb014;
}

.navbar-brand {
  color: #9c4100;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
}
img {
  height: 40px;
}
</style>
