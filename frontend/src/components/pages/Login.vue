<template>
  <div class="container" id="login">
    <!-- <input type="email" name="" id="" /> -->
    <img src="../../assets/LOGO.png" alt="" />
    <form @submit.prevent="login">
      <div class="mb-3">
        <input
          _ngcontent-eny-c79=""
          type="email"
          pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
          autocomplete
          autofocus
          placeholder="АДРЕС ЭЛ. ПОЧТЫ"
          v-model="email"
          aria-label="АДРЕС ЭЛ. ПОЧТЫ"
          ref="email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class=""
          ref="password"
          id="password"
          v-model="password"
          placeholder="ПАРОЛЬ"
        />
      </div>
      <button type="submit" class="enter">ВХОД</button>
    </form>
    <div>У ВАС НЕТ УЧ. ЗАПИСИ?</div>
    <div class="register"></div>

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
      empty: " ",
      notEmptyPassword: false,
      notEmptyEmail: false,
    };
  },
  methods: {
    async login() {
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
      this.$router.go(-1);
    },
  },
  computed: {
    userId() {
      return this.$store.state.token;
    },
  },
};
</script>

<style scoped>
#login {
  margin-top: 80px;
}
input {
  display: block;
  text-align: center;
  border: none;
  border-bottom: 3px solid #6d7175;
  width: 320px;
  height: 86px;
  background-color: transparent;
  font-size: 22px;
  font-weight: 400;
}
input:focus {
  outline: none;
  border-bottom: 4px solid #f2a900;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 437px;
  flex-direction: column;
}

.orange {
  color: #f2a900;
  font-weight: 600;
  font-size: 16px;
}
.enter {
  width: 100%;
  border: none;
  background-color: #f2a900;
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  height: 65px;
}
img {
  height: 200px;
}
</style>
