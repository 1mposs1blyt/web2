/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
//from views
import GamePage from "@/views/GamePage.vue";
import NorthHall from "@/views/NorthHall.vue";
import SouthHall from "@/views/SouthHall.vue";
import Balcony from "@/views/BalconyPage.vue";
import BedroomTwo from "@/views/BedroomTwo.vue";
import BedroomOne from "@/views/BedroomOne.vue";
import DiningRoom from "@/views/DiningRoom.vue";
import KitchenRoom from "@/views/KitchenRoom.vue";
//from components
import WallParam from "@/components/layouts/WallParam.vue";
import YouDied from "@/components/layouts/YouDied.vue";

const routes = [
  {
    path: "/",
    name: "Game",
    component: GamePage
  },
  {
    path: "/NorthHall",
    name: "NorthHall",
    component: NorthHall,
    children: [
      {
        name: "wall",
        path: 'wall',
        component: WallParam
      },
    ]
  },
  {
    path: "/SouthHall",
    name: "SouthHall",
    component: SouthHall,
    children: [
      {
        name: "wall",
        path: 'wall',
        component: WallParam
      },
    ],
  },
  {
    path: "/Balcony",
    name: "Balcony",
    component: Balcony,
    children: [
      {
        name: "FallFromWindow",
        path: "/FallFromWindow",
        component: YouDied
      }
    ],
  },
  {
    path: "/BedroomTwo",
    name: "BedroomTwo",
    component: BedroomTwo,
    children: [
      {
        name: "wall",
        path: 'wall',
        component: WallParam
      },
    ],
  },
  {
    path: "/BedroomOne",
    name: "BedroomOne",
    component: BedroomOne,
    children: [
      {
        name: "wall",
        path: 'wall',
        component: WallParam
      },
    ],
  },
  {
    path: "/DiningRoom",
    name: "DiningRoom",
    component: DiningRoom,
    children: [
      {
        name: "wall",
        path: 'wall',
        component: WallParam
      },
    ],
  },
  {
    path:"/Kitchen",
    name:"KitchenRoom",
    component: KitchenRoom,
    children: [
      {
        name: "wall",
        path: 'wall',
        component: WallParam
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
