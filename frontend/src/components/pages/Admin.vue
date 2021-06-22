<template>
  <main>
    <aside>
      <nav>
        <div class="nav" @click="setComponent('NewTournament')">
          Новый турнир
        </div>
        <div class="nav" @click="setComponent('TournamentsActions')">
          Все турниры
        </div>
      </nav>
    </aside>
    <section>
      <component :is="component"></component>
    </section>
  </main>
</template>

<script>
import NewTournament from "../pages/admin/NewTournament.vue";
import TournamentsActions from "../pages/admin/TournamentsActions.vue";
export default {
  data() {
    return {
      component: "",
    };
  },
  components: { NewTournament, TournamentsActions },
  methods: {
    setComponent(name) {
      this.component = name;
    },
  },
};
</script>
<style scoped>
main {
}
aside {
  background-color: #eee;
  min-width: 200px;
}
section {
  width: 100%;
  border: 1px solid #eee;
  display: block;
}
div.nav {
  font-size: 20px;
}
div.nav:hover {
  cursor: pointer;
  color: rgb(187, 138, 250);
}
</style>
<script></script>
