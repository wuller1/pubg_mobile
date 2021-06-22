<template>
  <div v-if="tournamentInfo.data">
    <img :src="tournamentInfo.data.image" alt="" />
    <div>{{ tournamentInfo.data.title }}</div>
    <el-button type="primary">Участвовать</el-button>
    <div>{{ tournamentInfo.data.description }}</div>
  </div>
  <div v-else>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
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
img {
  width: 50em;
}
</style>
