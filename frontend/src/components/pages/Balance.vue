<template>
  <main class="container">
    <div class="balance">
      Ваш баланс: <span class="red">{{ balance }}</span> билетов
    </div>
    <div class="tickets">
      <section @click="getLinks(3, 9)">
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">3 билета</div>
        <div class="price">Купить за 9$</div>
      </section>
      <section @click="fillBalance(5, 14)">
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">5 билетов</div>
        <div class="price">Купить за 14$</div>
      </section>
      <section @click="fillBalance(10, 27)">
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">10 билетов</div>
        <div class="price">Купить за 27$</div>
      </section>
      <section @click="fillBalance(20, 52)">
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">20 билетов</div>
        <div class="price">Купить за 52$</div>
      </section>
      <section @click="fillBalance(50, 125)">
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">50 билетов</div>
        <div class="price">Купить за 125$</div>
      </section>
      <section @click="fillBalance(100, 240)">
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">100 билетов</div>
        <div class="price">Купить за 240$</div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.red {
  color: red;
  font-weight: bold;
}
section {
  width: 200px;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.tickets {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
section {
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #625f5e2a;
  padding: 20px;
}
section:hover {
  border: 3px solid black;
  background-color: #625f5e93;
  cursor: pointer;
}
.number {
  margin: 10px auto;
  font-size: 35px;
}
.price {
  margin: 0 auto;
}
.balance {
  font-size: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      balance: "",
    };
  },
  methods: {
    async getLinks(tickets, dollars) {
      const axios = require("axios");
      const data = "";

      const config = {
        method: "get",
        url: `/api/v1/auth/link?amount=${dollars}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data,
      };

      let redirect_url = await axios(config);
      redirect_url = redirect_url.data.data.href;
      window.location.href = redirect_url;

      // get access token
      // get link to redirect
    },
    async fillBalance(balance, dollars) {
      const token = localStorage.getItem("token");
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");
      const body = JSON.stringify({
        sum: balance,
      });

      const options = {
        method: "POST",
        headers,
        body,
      };

      let fill = await fetch("/api/v1/auth/balance", options);
      fill = fill.json();
      console.log(fill);
    },
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
  },
  created() {
    this.getBalance();
  },
};
</script>
