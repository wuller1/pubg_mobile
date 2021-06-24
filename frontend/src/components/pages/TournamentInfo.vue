<template>
  <div class="container">
    <h1 class="title" v-if="tournamentInfo.data">
      {{ tournamentInfo.data.title.toUpperCase() }}
    </h1>
    <p v-if="tournamentInfo.data" class="m-0 bold start">
      НАЧАЛО ТУРНИРА: {{ dateTime.substring(0, dateTime.length - 3) }}
    </p>

    <div class="text" v-if="tournamentInfo.data">
      <div class="imgContainer">
        <img :src="tournamentInfo.data.image" alt="" />
      </div>
      <button class="button">Участвовать</button>
      <ul class="nav nav-tabs m-3">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Инфо</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Игроки</a>
        </li>
      </ul>

      <div>{{ tournamentInfo.data.description }}</div>
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
export default {
  data() {
    return {
      tournamentInfo: { data: null },
    };
  },
  methods: {},
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgContainer {
  max-width: 650px;
  min-width: 350px;
  height: 200px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.text {
  color: #ffde40;
  font-weight: bold;
}
.button {
  background-color: #f2a900;
  border: #f2a900;
  font-weight: bold;
  padding: 10px 80px;
  margin: 0 auto;
  display: block;
  color: #fff;
  margin-top: 25px;
}
.start {
  font-size: 1.4em;
  font-weight: bold;
}
.title {
}
</style>
