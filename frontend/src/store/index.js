import { createStore } from "vuex";
import tournaments from "./modules/tournaments.js";
import auth from "./modules/auth.js";

export default createStore({
  modules: { tournaments, auth },
});
