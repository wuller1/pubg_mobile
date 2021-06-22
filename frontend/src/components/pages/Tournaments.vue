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
  </div>
</template>
<script>
import AxiosApi from "../../AxiosApi";
export default {
  data() {
    return {
      tournaments: {},
      error: "",
    };
  },
  methods: {},
  async created() {
    try {
      this.tournaments = await AxiosApi.getTournaments();
    } catch (err) {
      this.error = err.message;
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
