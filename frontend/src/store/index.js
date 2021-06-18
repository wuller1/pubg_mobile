import { createStore } from "vuex";
import tournaments from "./modules/tournaments.js";
export default createStore({
  modules: { tournaments },
});
