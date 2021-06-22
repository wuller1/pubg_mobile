<template>
  <div class="card m-5" style="width: 18rem;">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <router-link :to="`/tournaments/${id}`"
        ><button class="btn btn-primary">
          Подробнее
        </button></router-link
      >
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
button {
  float: right;
  margin: 1em;
}
</style>
<script>
export default {
  props: ["title", "image", "description", "id"],
};
</script>
