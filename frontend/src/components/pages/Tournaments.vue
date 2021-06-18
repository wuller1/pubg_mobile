<template>
  <div v-if="tournaments">
    <base-card
      v-for="tournament in tournaments"
      :key="tournament._id"
      :title="tournament.title"
      :image="tournament.image"
      :description="tournament.description"
      :id="tournament._id"
    >
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tournaments: {},
    };
  },
  methods: {
    getTournaments() {
      fetch("/api/v1/tournaments", {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.tournaments = data.data;
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    },
  },
  mounted() {
    this.getTournaments();
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
