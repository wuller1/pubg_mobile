import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tournaments from "../components/pages/Tournaments.vue";
import TournamentInfo from "../components/pages/TournamentInfo.vue";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";
import Admin from "../components/pages/Admin";
import EditTournament from "../components/pages/admin/EditTournament";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/tournaments",
    component: Tournaments,
  },
  {
    path: "/tournaments/:id",
    component: TournamentInfo,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/tournaments/:id/edit",
    component: EditTournament,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
