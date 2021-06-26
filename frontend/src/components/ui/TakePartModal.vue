<template>
  <!-- The Modal -->
  <div ref="modal" class="modal" @click="close">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <form @submit.prevent="register">
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
            <button type="submit" class="enter">
              УЧАСТВОВАТЬ
            </button>
          </form>
          <div>У ВАС НЕТ УЧ. ЗАПИСИ?</div>
          <div class="register"></div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$refs.modal.style.display = "none";
      this.$emit("toggle_take_part");
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

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
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
  width: 80%;
  border-radius: 0px;
  min-height: 800px;
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
</style>
