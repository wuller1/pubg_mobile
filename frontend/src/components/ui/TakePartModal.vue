<template>
  <!-- The Modal -->
  <div ref="modal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click.exact="close">&times;</span>
      <form @submit.prevent="register">
        <div class="container" id="login">
          <!-- <input type="email" name="" id="" /> -->
          <img src="../../assets/LOGO.png" alt="" />
          <form @submit.prevent="login">
            <div class="mb-3">
              <input
                _ngcontent-eny-c79=""
                type="input"
                autofocus
                placeholder="NICKNAME В ИГРЕ"
                v-model="nickname"
                aria-label="NICKNAME В ИГРЕ"
                ref="nickname"
              />
            </div>
            <div class="text">
              <p>Стоимость регистрации на матч: 2 билета</p>
            </div>
            <button @click.prevent="register" type="submit" class="enter">
              ЗАРЕГЕСТРИРОВАТЬСЯ
            </button>
          </form>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nickname: "",
    };
  },
  methods: {
    async register() {
      // Проверить баланс
      const token = localStorage.getItem("token");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      let requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      let data = await fetch("/api/v1/auth/me", requestOptions);
      data = await data.json();
      const balance = data.data.balance;
      const id = data.data._id;

      // Если баланс > 2, зарегестрировать
      if (balance > 2) {
        myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          `Bearer ${localStorage.getItem("token")}`
        );
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          nickName: this.nickname,
          user: id,
        });

        requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };

        fetch(
          `/api/v1/tournaments/${this.$route.params.id}/register`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      }
    },
    close() {
      this.$refs.modal.style.display = "none";
      this.$emit("toggle_take_part");
    },
  },
  mounted() {},
};
</script>
<style scoped>
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
  border-radius: 5px;
  background-color: #f2a900;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  height: 65px;
}
img {
  height: 200px;
}

.modal {
  /* display: block;
  position: fixed; */
  z-index: 1;
  /* left: 0;
  top: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  border-radius: 0px;
}

.close {
  color: #aaa;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: 0px;
  right: 20px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
#paypal-button-container {
  margin-top: 15px;
}
.text {
  display: flex;
  justify-content: center;
}
</style>
