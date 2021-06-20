import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tournaments from "../components/pages/Tournaments.vue";
import TournamentInfo from "../components/pages/TournamentInfo.vue";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tournaments",
    name: "Tournaments",
    component: Tournaments,
  },
  {
    path: "/tournaments/:id",
    name: "TournamentInfo",
    component: TournamentInfo,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
