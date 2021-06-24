<template>
  <div>
    <div class="wrapper" v-if="tournaments.data">
      <base-card
        v-for="tournament in tournaments.data"
        :key="tournament._id"
        :title="tournament.title"
        :image="tournament.image"
        :description="tournament.description"
        :id="tournament._id"
        :startsAt="tournament.startsAt"
      >
      </base-card>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <nav>
      <ul class="pagination">
        <li v-if="previousPage" class="">
          <a @click="goToPage(previousPage)" class="page-link">ПРЕДЫДУЩАЯ</a>
        </li>
        <li v-for="n in pagesCount" :key="n" @click="goToPage(n)" class="">
          <a class="page-link">{{ n }}</a>
        </li>
        <li v-if="nextPage" class="">
          <a @click="goToPage(nextPage)" class="page-link">СЛЕДУЮЩАЯ</a>
        </li>
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
      page: 1,
    };
  },
  methods: {
    async getTournaments() {
      try {
        this.tournaments = await AxiosApi.getTournaments(this.page);
      } catch (err) {
        this.error = err.message;
        console.log(this.error);
      }
    },
    goToPage(page) {
      this.page = page;
    },
  },
  watch: {
    page: "getTournaments",
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
  async created() {
    this.getTournaments();
  },
};
</script>
<style scoped>
.page-link {
  background-color: #dd9933;

  color: white;
  font-weight: bold;
  border-top-right-radius: 0rem;
}
.page-link:hover {
  cursor: pointer;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;
}
.pagination {
  display: flex;
  justify-content: center;
}
.page-item {
  border-radius: 0px;
}
</style>
``
