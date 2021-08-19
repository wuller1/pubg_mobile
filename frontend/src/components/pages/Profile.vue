<template>
  <div class="container">
    <form @submit.prevent="updateUser">
      <div class="mb-3">
        <label for="lastName" class="form-label">Фамилия</label>
        <input
          type="input"
          class="form-control"
          id="lastName"
          v-model="lastName"
        />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Имя</label>
        <input
          type="input"
          class="form-control"
          id="name"
          v-model="firstName"
        />
      </div>
      <div class="mb-3">
        <label for="nickName" class="form-label">Nickname в игре</label>
        <input
          type="input"
          class="form-control"
          id="nickname"
          v-model="nickName"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Адрес электронной почты</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          readonly
        />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Номер телефона</label>
        <input
          type="phone"
          class="form-control"
          id="phone"
          v-model="phoneNumber"
        />
      </div>
      <div class="mb-3">
        <label for="discord" class="form-label">Логин discord</label>
        <input
          type="discord"
          class="form-control"
          id="discord"
          v-model="discordLogin"
        />
      </div>
      <div class="mb-3">
        <label for="country" class="form-label">Страна</label>
        <input
          type="country"
          class="form-control"
          id="country"
          v-model="country"
        />
      </div>
      <div class="mb-3">
        <label for="balance" class="form-label">Баланс</label>
        <input
          type="input"
          class="form-control"
          id="balance"
          v-model="balance"
          readonly
        />
        <button class="fill" @click.prevent="">
          <router-link to="/balance">Пополнить</router-link>
        </button>
      </div>
      <button type="submit" class="enter">Сохранить изменения</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      lastName: "",
      firstName: "",
      nickName: "",
      country: "",
      discordLogin: "",
      email: "",
      phoneNumber: "",
      balance: "",
      id: "",
    };
  },
  methods: {
    getUserData() {
      const token = localStorage.getItem("token");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      fetch("/api/v1/auth/me", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.data.firstName) {
            this.firstName = result.data.firstName;
          }
          if (result.data.lastName) {
            this.lastName = result.data.lastName;
          }
          if (result.data.nickName) {
            this.nickName = result.data.nickName;
          }
          if (result.data.phoneNumber) {
            this.phoneNumber = result.data.phoneNumber;
          }
          if (result.data.discordLogin) {
            this.discordLogin = result.data.discordLogin;
          }
          if (result.data.country) {
            this.country = result.data.country;
          }
          this.balance = result.data.balance;
          this.email = result.data.email;
          this.id = result.data._id;
        })
        .catch((error) => console.log("error", error));
    },
    updateUser() {
      const token = localStorage.getItem("token");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        lastName: this.lastName,
        firstName: this.firstName,
        nickName: this.nickName,
        country: this.country,
        discordLogin: this.discordLogin,
        phoneNumber: this.phoneNumber,
        id: this.id,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch("/api/v1/auth/user", requestOptions)
        .then((response) => response.json())
        .then((result) => result)
        .catch((error) => console.log("error", error));
    },
  },
  created() {
    this.getUserData();
  },
};
</script>
<style scoped>
.container {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 437px;
  flex-direction: column;
}
input {
  display: block;
  text-align: center;
  border: none;
  border-bottom: 3px solid #6d7175;
  width: 320px;
  height: 40px;
  background-color: transparent;
  font-size: 22px;
  font-weight: 400;
}
input:focus {
  outline: none;
  border-bottom: 4px solid #f2a900;
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
  margin-bottom: 80px;
}
.fill {
  display: inline;
}
</style>
