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
            <div class="text"><p>Стоимость регистрации на матч: 5$</p></div>
            <button type="submit" class="enter">
              ОПЛАТИТЬ ВНУТРЕННЕЙ ВАЛЮТОЙ
            </button>
            <div id="paypal-button-container"></div>
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
    close() {
      this.$refs.modal.style.display = "none";
      this.$emit("toggle_take_part");
    },
    paypalButton() {
      paypal
        .Buttons({
          createOrder: function(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "5",
                  },
                },
              ],
            });
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
            });
          },
        })
        .render("#paypal-button-container"); // Display payment options on your web page
    },
  },
  mounted() {
    this.paypalButton();
  },
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
