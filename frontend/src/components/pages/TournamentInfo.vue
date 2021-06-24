<template>
  <div class="container">
    <ul class="nav nav-tabs m-3">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">Инфо</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Игроки</a>
      </li>
    </ul>

    <div class="text" v-if="tournamentInfo.data">
      <div class="imgContainer">
        <img :src="tournamentInfo.data.image" alt="" />
      </div>
      <div>{{ tournamentInfo.data.title }}</div>
      <button class="btn">Участвовать</button>
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
.imgContainer {
  height: 20em;
  width: 30em;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.text {
  color: #ffde40;
  font-weight: bold;
}
.btn {
  border-radius: 0px;
  background-color: #ffde40;
  color: #9c4100;
}
</style>
