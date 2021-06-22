<template>
  <div class="container">
    <div v-if="tournaments.data">
      <base-card
        v-for="tournament in tournaments.data"
        :key="tournament._id"
        :title="tournament.title"
        :image="tournament.image"
        :description="tournament.description"
        :id="tournament._id"
      >
      </base-card>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Предыдущая</a></li>
        <li v-for="n in pagesCount" :key="n" class="page-item">
          <a class="page-link" href="#">{{ n }}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">Следующая</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
import AxiosApi from "../../AxiosApi";
export default {
  data() {
    return {
      tournaments: {},
      error: "",
      page: "",
    };
  },
  methods: {},
  computed: {
    pagesCount() {
      if (this.tournaments.pagination) {
        return this.tournaments.pagination.numberOfPages;
      }
    },
  },
  async created() {
    try {
      this.tournaments = await AxiosApi.getTournaments();
    } catch (err) {
      this.error = err.message;
      console.log(this.error);
    }
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
