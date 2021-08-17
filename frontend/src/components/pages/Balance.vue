<template>
  <main class="container">
    <div class="balance">
      Ваш баланс: <span class="red">{{ 135 + balance }}</span> билетов
    </div>
    <div class="tickets">
      <section>
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">3 билета</div>
        <div class="price">Купить за 7$</div>
      </section>
      <section>
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">5 билетов</div>
        <div class="price">Купить за 7$</div>
      </section>
      <section>
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">10 билетов</div>
        <div class="price">Купить за 7$</div>
      </section>
      <section>
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">20 билетов</div>
        <div class="price">Купить за 7$</div>
      </section>
      <section>
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">50 билетов</div>
        <div class="price">Купить за 7$</div>
      </section>
      <section>
        <div><img src="../../assets/ticket.jpg" alt="" /></div>
        <div class="number">100 билетов</div>
        <div class="price">Купить за 7$</div>
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
    async balance() {
      const token = localStorage.getItem("token");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      let data = await fetch(
        "http://localhost:5000/api/v1/auth/me",
        requestOptions
      );
      data = await data.json();
      const balance = data.data.balance;
      this.balance = balance;
    },
  },
  created() {
    this.balance();
  },
};
</script>
