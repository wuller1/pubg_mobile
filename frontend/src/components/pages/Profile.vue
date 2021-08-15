<template>
  <div class="container">
    <form @submit.prevent="save">
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
        <input type="input" class="form-control" id="name" v-model="name" />
      </div>
      <div class="mb-3">
        <label for="nickname" class="form-label">Nickname в игре</label>
        <input
          type="input"
          class="form-control"
          id="nickname"
          v-model="nickname"
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
        <input type="phone" class="form-control" id="phone" v-model="phone" />
      </div>
      <div class="mb-3">
        <label for="discord" class="form-label">Логин discord</label>
        <input
          type="discord"
          class="form-control"
          id="discord"
          v-model="discord"
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
        <button class="fill">Пополнить</button>
      </div>
      <button type="submit" class="enter">Сохранить изменения</button>
    </form>
  </div>
</template>

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
