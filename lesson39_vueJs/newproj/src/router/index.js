/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
//from views
import GamePage from "@/views/GamePage.vue";

//from components
// import WallParam from "@/components/layouts/WallParam.vue";
// import YouDied from "@/components/layouts/YouDied.vue";
const routes = [
  {
    path: "/",
    name: "Game",
    component: GamePage,
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
