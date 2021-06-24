<template>
  <main class="container">
    <form @submit.prevent="createTournament">
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
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
          required
        />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Изображение турнира</label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          accept="image/*"
          @change="handleFileUpload"
          ref="file"
        />
      </div>
      <div class="image"><img :src="image" /></div>
      <label for="description" class="form-label">Описание турнира</label>
      <div class="mb-3">
        <textarea
          v-model="description"
          class="form-control"
          id="description"
        ></textarea>
      </div>
      <div class="mb-3">
        <button type="submit" class="">Добавить</button>
      </div>
    </form>
  </main>
</template>
<script>
import AxiosApi from "../../../AxiosApi";
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
    };
  },
  computed: {},
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      const file = event.target.files[0];
      this.image = URL.createObjectURL(file);
    },
    async createTournament(event) {
      const data = {
        title: this.title,
        type: this.type,
        startsAt: this.startsAt,
        description: this.description,
      };
      const form = new FormData();
      form.append("file", this.file);

      try {
        const create = await AxiosApi.createTournament(data, this.token);
        const id = create.data.data._id;

        const upload = await fetch(`/api/v1/tournaments/${id}/photo`, {
          method: "PUT",
          headers: {
            Authorization: this.token,
          },
          body: form,
        });
      } catch (err) {
        this.error = err.message;
      }
      this.$router.push({ path: "/tournaments" });
    },
  },
};
</script>
<style scoped>
img {
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
}
input,
textarea,
select {
  border: none;
  border-bottom: 3px;
  background-color: #ffde40;
  border-color: #fff512;
  color: #090907;
  border-color: #ebb014;
  font-weight: bold;
}
form {
  color: black;
  font-weight: bold;
}
button {
  background-color: #f2a900;
  border: #f2a900;
  font-weight: bold;
  padding: 10px 80px;
  margin: 0 auto;
  display: block;
  color: #fff;
}
button:hover {
  background-color: #ebb014;
}
input[type="file"]::file-selector-button {
  background-color: #ebb014;
  font-weight: bold;
}
input[type="file"]::file-selector-button:hover {
  background-color: #de8d00;
}
</style>
