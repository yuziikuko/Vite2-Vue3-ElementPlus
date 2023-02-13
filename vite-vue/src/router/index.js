// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue"),
    },
    {
      path: "/login",
      component: () => import("../components/Login.vue"),
    },
  ],
});

export default router;
