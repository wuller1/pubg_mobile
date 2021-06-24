<template>
  <div class="m-2">
    <div class="">
      <img :src="image" class="card-image-new" />
    </div>
    <div class="content">
      <div class="text">
        <!-- <p class="card-text center">{{ description }}</p> -->
        <p class="m-0 bold start">
          НАЧАЛО ТУРНИРА: {{ dateTime.substring(0, dateTime.length - 3) }}
        </p>
        <h5 class="card-title bold title">{{ title.toUpperCase() }}</h5>
      </div>
    </div>
    <router-link class="" :to="`/tournaments/${id}`">
      <div class="more">ПОДРОБНЕЕ</div>
    </router-link>
  </div>
</template>

<style scoped>
.more {
  background-color: #f2a900;
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 1.3em;
}
.start {
  font-size: 1.4em;
  font-weight: bold;
}
.title {
  font-size: 1.4em;
  font-weight: normal;
}
/* .bold {
  font-weight: bold;
} */

.content {
  background-color: white;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-image-new {
  /* height: 220px; */
  width: 320px;
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
