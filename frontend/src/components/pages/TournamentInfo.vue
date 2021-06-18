<template>
  <div v-if="tournamentInfo">
    <img :src="tournamentInfo.image" alt="" />
    <div>{{ tournamentInfo.title }}</div>
    <el-button type="primary">Участвовать</el-button>
    <div>{{ tournamentInfo.description }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tournamentInfo: null,
    };
  },
  methods: {
    getTournamentInfo() {
      fetch("/api/v1/tournaments/" + this.$route.params.id, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.tournamentInfo = data.data;
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    },
  },
  mounted() {
    this.getTournamentInfo();
  },
};
</script>

<style scoped>
img {
  width: 50em;
}
</style>
