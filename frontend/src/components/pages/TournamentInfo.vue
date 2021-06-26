<template>
  <div>
    <input-modal
      v-if="take_part"
      @toggle_take_part="toggleTakePart"
    ></input-modal>
    <div v-if="tournamentInfo.data" class="container">
      <h1 class="title">
        {{ tournamentInfo.data.title.toUpperCase() }}
      </h1>
      <div class="bold start">
        НАЧАЛО ТУРНИРА:
        <p class="orange">{{ dateTime.substring(0, dateTime.length - 3) }}</p>
      </div>

      <div class="text">
        <div class="imgContainer">
          <img :src="tournamentInfo.data.image" alt="" />
        </div>
        <button v-if="!registered" class="button" @click="toggleTakePart">
          Участвовать
        </button>
        <button v-else class="button">
          Получить ID и пароль lobby
        </button>
        <!-- <ul class="nav nav-tabs m-3">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Инфо</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Игроки</a>
        </li>
      </ul> -->
        <ul class="tab_ul">
          <li @click="setComponent('info')" class="active">Инфо</li>
          <li @click="setComponent('gamers')" class="tab">Игроки</li>
        </ul>
        <div v-if="component === 'info'" id="info">
          <div class="mode">
            <div>Режим: {{ tournamentInfo.data.type }}</div>
            <div>Карта: {{ tournamentInfo.data.map }}</div>
          </div>
          <div class="description">
            <p class="header">Порядок регистрации на турнир:</p>
            <p>
              1. Нажми на кнопку "Участвовать", введи свой nickname на странице
              регистрации на турнир (nickhame в игре и указанный при регистрации
              на матч должны совпадать). Стоимость регистрации на матч - 5$.
            </p>
            <p>
              2. За 10 минут до начала турнира данные для входа будут высланы на
              твой адрес электронной почты, указанный при регистрации на сайте.
              Так же получить данные для входа можно зайдя на страницу турнира,
              нажав на кнопку "Получить ID и пароль lobby".
            </p>
            <p>3. Войди в игру и получай по 3$ за каждый kill.</p>
            <p>
              4. Количество kill-ов будет доступно на странице турнира после
              завершения матча.
            </p>
            <p>5. Обновление результатов может занять до 1 часа.</p>
          </div>
        </div>
        <div v-else></div>
      </div>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import AxiosApi from "../../AxiosApi";
import InputModal from "../ui/TakePartModal.vue";
export default {
  components: { InputModal },
  data() {
    return {
      tournamentInfo: { data: null },
      registered: false,
      take_part: false,
      component: "info",
    };
  },
  methods: {
    toggleTakePart() {
      this.take_part = !this.take_part;
    },
    setComponent(name) {
      this.component = name;
    },
  },
  computed: {
    dateTime() {
      const date = new Date(this.tournamentInfo.data.startsAt);
      // const dateT = new Date(date);
      // return datetime;
      const date_time = date.toLocaleString();

      return `${date_time}`;
    },
  },
  async created() {
    try {
      this.tournamentInfo = await AxiosApi.getTournament(this.$route.params.id);
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<style scoped>
.container {
  margin-top: 70px;
}
.imgContainer {
  max-width: 650px;
  min-width: 350px;
  height: 350px;
  display: block;
  margin-bottom: none;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.text {
  color: #77681d;
  font-weight: bold;
}
.button {
  background-color: #f2a900;
  border: #f2a900;
  font-weight: bold;
  padding: 10px;
  color: #fff;
  margin-top: 30px;
  width: 200px;
}
.start {
  font-size: 1.4em;
  font-weight: bold;
}
.description {
  margin-top: 20px;
  font-size: 17px;
  max-width: 650px;
}
.mode {
  margin-top: 20px;
  font-size: 18px;
}
p.orange {
  color: #de8d00;
  display: inline;
}
p.header {
  color: #de8d00;
  display: block;
  font-size: 20px;
  text-transform: uppercase;
}
.tab {
  list-style-type: none;
  display: inline;
  margin-left: 20px;
  text-transform: uppercase;
  padding: 10px 30px;
  border: 2px solid #090907;
  color: #090907;
}
.tab:hover {
  cursor: pointer;
  border-color: #ebb014;
  color: #ebb014;
}
.tab:first-of-type {
  margin-left: 0px;
}
.active:hover {
  background-color: #77681d;
  cursor: pointer;
  border-color: #77681d;
}
.tab_ul {
  margin-top: 40px;
  max-width: 650px;
  padding: 0px;
}
.active {
  background-color: #090907;
  color: white;
  list-style-type: none;
  display: inline;
  text-transform: uppercase;
  padding: 10px 30px;
  border: 2px solid #090907;
}
</style>
