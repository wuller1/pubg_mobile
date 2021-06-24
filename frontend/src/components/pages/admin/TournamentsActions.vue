<template>
  <div>
    <div class="wrapper" v-if="tournaments.data">
      <base-card-admin
        v-for="tournament in tournaments.data"
        :key="tournament._id"
        :title="tournament.title"
        :image="tournament.image"
        :description="tournament.description"
        :id="tournament._id"
        :startsAt="tournament.startsAt"
      >
      </base-card-admin>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <nav>
      <ul class="pagination">
        <li v-if="previousPage" class="page-item">
          <a @click="goToPage(previousPage)" class="page-link">Предыдущая</a>
        </li>
        <li
          v-for="n in pagesCount"
          :key="n"
          @click="goToPage(n)"
          class="page-item"
        >
          <a class="page-link">{{ n }}</a>
        </li>
        <li v-if="nextPage" class="page-item">
          <a @click="goToPage(nextPage)" class="page-link">Следующая</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import AxiosApi from "../../../AxiosApi";
export default {
  data() {
    return {
      tournaments: {},
      error: "",
      page: 1,
    };
  },
  methods: {
    async getTournaments() {
      try {
        this.tournaments = await AxiosApi.getTournaments(this.page);
      } catch (err) {
        this.error = err.message;
      }
    },
    goToPage(page) {
      this.page = page;
    },
  },
  computed: {
    pagesCount() {
      if (this.tournaments.pagination) {
        return this.tournaments.pagination.numberOfPages;
      }
    },
    previousPage() {
      if (this.page > 1) {
        return this.page - 1;
      }
      return false;
    },
    nextPage() {
      if (this.page >= this.pagesCount) {
        return false;
      }
      return this.page + 1;
    },
  },
  watch: {
    page: "getTournaments",
  },
  async created() {
    this.getTournaments();
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.pagination {
  display: flex;
  justify-content: center;
}
.page-link {
  background-color: #ffde40;
  border-width: 2px;
  color: #9c4100;
  font-weight: bold;
}
.page-link:hover {
  cursor: pointer;
}
</style>
