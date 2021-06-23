<template>
  <router-link class="rounded" :to="`/tournaments/${id}`"
    ><div class="card m-5" style="width: 25rem;">
      <img :src="image" class="card-img-top" />
      <div class="card-body bold">
        <div class="text">
          <!-- <p class="card-text center">{{ description }}</p> -->
          <p class="m-0 bold">Начало турнира: {{ dateTime }}</p>
          <h5 class="card-title bold">{{ title }}</h5>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.bold {
  font-weight: bold;
}
.card {
  border: 0px solid black;
  height: 220px;
  max-width: 320px;
}
.card-body {
  position: absolute;
  top: 0;
  left: 0;
  color: #ffde40;
  /* background-color: rgba(78, 78, 78, 0.171); */
  min-height: 100%;
  min-width: 100%;
}
.card-body:hover {
  background-color: rgba(158, 157, 157, 0.294);
}
.text {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-shadow: 0px 0px 20px rgb(0, 0, 0);
  background-color: rgba(5, 5, 5, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-img-top {
  height: 220px;
  object-fit: cover;
}
button {
  float: right;
  margin: 1em;
}
a {
  color: rgb(73, 73, 73);
  text-decoration: none;
}
</style>
<script>
export default {
  props: ["title", "image", "description", "id", "startsAt"],
  computed: {
    dateTime() {
      const date = new Date(this.startsAt);
      // const dateT = new Date(date);
      // return datetime;
      const date_time = date.toLocaleString();

      return `${date_time}`;
    },
  },
};
</script>
