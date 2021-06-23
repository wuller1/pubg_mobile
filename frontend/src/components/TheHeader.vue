<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
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
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          ref="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <router-link
              @click="toggle"
              class="nav-link active"
              aria-current="page"
              to="/"
              >Домой</router-link
            >
            <router-link @click="toggle" class="nav-link" to="/tournaments"
              >Турниры</router-link
            >
            <router-link
              @click="toggle"
              v-if="isAdmin || isPublisher"
              class="nav-link"
              to="/admin"
              >Админ</router-link
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
              >Войти</router-link
            >
            <router-link
              @click="toggle"
              v-if="!isLoggedIn"
              class="nav-link"
              to="/register"
              >Зарегестрироваться</router-link
            >
            <router-link
              @click="
                toggle();
                logout();
              "
              v-else
              class="nav-link"
              to="/tournaments"
              >Выйти</router-link
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
    try {
      this.tournaments = await AxiosApi.getTournaments();
    } catch (err) {
      this.error = err.message;
    }
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
a:hover {
  text-decoration: none;
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
}
.nav-link:hover {
  background-color: #ebb014;
}

.navbar-brand {
  color: #9c4100;
}
</style>
