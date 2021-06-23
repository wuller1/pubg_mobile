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
        <div class="center">
          <a :href="`/tournaments/${id}/edit`" class="btn edit mb-3"
            ><i class="bi bi-pencil-square"></i
          ></a>
          <a href="/tournaments/add_user" class="btn add mb-3"
            ><i class="bi bi-person-plus"></i
          ></a>
          <a @click="delete_tournament(id)" class="btn delete mb-3"
            ><i class="bi bi-trash"></i
          ></a>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.center {
  position: absolute;
  top: 1em;
  right: 1em;
}
a.btn {
  display: block;
  width: 3em;
}
.bi-trash,
.bi-person-plus {
  color: white;
}

.edit {
  background-color: rgba(255, 255, 0, 0.5);
  color: black;
}
.edit:hover {
  background-color: rgba(255, 255, 0, 1);
}
.add {
  background-color: rgba(0, 128, 0, 0.5);
}
.add:hover {
  background-color: rgba(0, 128, 0, 1);
}

.delete {
  background-color: rgba(220, 20, 60, 0.5);
}
.delete:hover {
  background-color: rgba(220, 20, 60, 1);
}
.bold {
  font-weight: bold;
}
.card {
  border: 0px solid black;
  max-height: 250px;
  max-width: 100%;
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
  background-color: rgba(5, 5, 5, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-img-top {
  height: 250px;
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
import AxiosApi from "../../AxiosApi";
export default {
  data() {
    return {
      token: this.$store.getters["auth/token"],
    };
  },
  props: ["title", "image", "description", "id", "startsAt"],
  methods: {
    async delete_tournament(id) {
      await AxiosApi.deleteTournament(id, this.token);
      this.$router.push({ path: "/tournaments" });
    },
  },
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
