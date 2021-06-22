<template>
  <div class="card m-3" style="width: 18rem;">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="center">
        <a :href="`/tournaments/${id}/edit`" class="btn btn-warning mb-3"
          >Редактировать</a
        >
        <a href="/tournaments/add_user" class="btn btn-info mb-3"
          >Добавить пользователя</a
        >
        <a @click="delete_tournament(id)" class="btn btn-danger mb-3"
          >Удалить турнир</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.center {
  display: flex;
  flex-direction: column;
}
</style>
<script>
import AxiosApi from "../../AxiosApi";
export default {
  data() {
    return {
      token: this.$store.getters["auth/token"],
    };
  },
  props: ["title", "image", "description", "id"],
  methods: {
    async delete_tournament(id) {
      await AxiosApi.deleteTournament(id, this.token);
    },
  },
};
</script>
