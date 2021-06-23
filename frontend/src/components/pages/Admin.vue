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
aside {
  background-color: #eee;
  min-width: 200px;
}
section {
  width: 100%;
  display: block;
}
div.nav {
  font-size: 20px;
  background-color: #fff512;
  color: #eee;
  display: flex;
  justify-content: center;
  color: #9c4100;
  font-weight: bold;
}
div.nav:hover {
  cursor: pointer;
  color: #fff512;
  background-color: #ebb014;
}
</style>
<script></script>
