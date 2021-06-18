<template>
  <section>
    <header>
      <h2>{{ title }}</h2>
    </header>
    <img :src="image" />
    <article>{{ description }}</article>
    <router-link :to="`/tournaments/${id}`"
      ><el-button type="primary">Подробнее</el-button></router-link
    >
  </section>
</template>

<style scoped>
header {
  text-align: center;
}
section {
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  max-width: 35%;
  overflow: hidden;
  margin: 1em;
  max-width: 30em;
}

article {
  margin: 1em;
}

img {
  max-width: 100%;
  max-height: 100%;
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
