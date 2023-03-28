<template>
  <!-- 当前路由如果包含“已登录”字段，则隐藏该按钮并显示“已登录” -->
  <el-button
    type="danger"
    @click="toLogin"
    v-if="!isLogged"
    style="width: 100%; margin: 20px auto"
  >
    {{ t("button.login") }}
  </el-button>
  <h1 v-else>{{ t("button.isLogged") }}</h1>

  <!-- 退出登录 -->
  <el-button
    type="warning"
    @click="toLogout"
    v-if="isLogged"
    style="width: 100%; margin: 20px auto"
  >
    {{ t("button.logout") }}
  </el-button>

  <!-- 打开抽屉 -->
  <el-button
    type="success"
    @click="handleOpenChildrenDrawer"
    style="width: 100%; margin: 20px auto"
  >
    {{ t("button.openDrawer") }}
  </el-button>
  <SideDrawer></SideDrawer>
</template>

<script setup>
import { onMounted, ref, provide } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SideDrawer from "./SideDrawer.vue";

/**
 * vue-router
 */
// 导入t函数
const { t } = useI18n();
// 操作路由跳转
const router = useRouter();
// 获取路由参数
const route = useRoute();
const isLogged = route.params.isLogged;
// 登录
const toLogin = () => {
  router.push("/login");
};
// 退出登录
const toLogout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
// 组件挂载时清空本地token
onMounted(() => {
  localStorage.removeItem("token");
});

/**
 * 自定义组件
 */
const isDrawerOpen = ref(false);
// 提供响应式的值
provide("isDrawerOpen", isDrawerOpen);
const handleOpenChildrenDrawer = () => {
  isDrawerOpen.value = true;
};
</script>
