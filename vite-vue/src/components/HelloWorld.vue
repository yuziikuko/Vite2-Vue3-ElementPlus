<template>
  <!-- 当前路由如果包含“已登录”字段，则隐藏该按钮并显示“已登录” -->
  <el-button type="danger" @click="toLogin" v-if="isLogged">登录</el-button>
  <h1 v-else>已登录</h1>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

// 操作路由跳转
const router = useRouter();

// 获取路由参数
const route = useRoute();
const isLogged = route.params.isLogged;

const toLogin = () => {
  router.push("/login");
};
</script>
