<template>
  <main class="container">
    <div v-if="title">
      <form @submit.prevent="updateTournament">
        <div class="mb-3">
          <label for="title" class="form-label">Название</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Тип турнира</label>
          <select
            id="type"
            class="form-select"
            aria-label="Default select example"
            v-model="type"
          >
            <option selected value="solo">Соло</option>
            <option value="duo">Дуо</option>
            <option value="squad">Сквад</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="datetime" class="form-label">Время начала турнира</label>
          <input
            v-model="startsAt"
            type="datetime-local"
            id="datetime"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">Изображение турнира</label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            accept="image/*"
            @change="onFileChange"
            ref="file"
          />
        </div>
        <div class="mb-3 image"><img :src="image" alt="" /></div>
        <label for="description" class="form-label">Описание турнира</label>
        <div class="mb-3">
          <textarea
            v-model="description"
            class="form-control"
            id="description"
          ></textarea>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Редактировать</button>
        </div>
      </form>
    </div>
    <div v-else class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </main>
</template>
<script>
import AxiosApi from "../../../AxiosApi";
const moment = require("moment");
export default {
  data() {
    return {
      title: "",
      type: "",
      startsAt: "",
      description: "",
      token: this.$store.getters["auth/token"],
      file: "",
      image: "",
      id: "",
    };
  },
  computed: {},
  methods: {
    onFileChange(event) {
      this.file = this.$refs.file.files[0];
      const file = event.target.files[0];
      this.image = URL.createObjectURL(file);
    },
    async updateTournament(event) {
      const data = {
        title: this.title,
        type: this.type,
        startsAt: this.startsAt,
        description: this.description,
      };

      try {
        const update = await AxiosApi.updateTournament(
          data,
          this.token,
          this.id
        );
        console.log("updated successfully");

        if (this.file) {
          const form = new FormData();
          form.append("file", this.file);

          await fetch(`/api/v1/tournaments/${this.id}/photo`, {
            method: "PUT",
            headers: {
              Authorization: this.token,
            },
            body: form,
          });
        }
        this.$router.push('/admin')
      } catch (err) {
        console.log(err);
        this.error = err.message;
      }
    },
    async getData() {
      try {
        const data = await fetch(`/api/v1/tournaments/${id}`, {
          method: "GET",
        });
        console.log(await data.json());
      } catch (err) {
        this.error = err.message;
      }
    },
  },
  async created() {
    try {
      const data = await fetch(`/api/v1/tournaments/${this.$route.params.id}`, {
        method: "GET",
      });
      const response = await data.json();
      const info = response.data;
      this.title = info.title;
      this.type = info.type;
      this.startsAt = moment(info.startsAt).format("YYYY-MM-DDThh:mm");
      this.description = info.description;
      this.image = info.image;
      this.id = info._id;
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>
<style scoped>
img {
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
}
</style>
