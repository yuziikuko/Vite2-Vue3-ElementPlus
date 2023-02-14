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

// 路由守卫
router.beforeEach((to) => {
  // 根据token判断是否登录
  let token = localStorage.getItem("token");
  // 有token但是访问的是登录页 => 强制跳转到首页
  if (token && to.path === "/login") return "/";
  // 没有token但是访问的是首页 => 强制跳转到登录页
  else if (!token && to.path !== "/login") return "/login";
});
