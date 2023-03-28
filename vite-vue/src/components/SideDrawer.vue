<template>
  <el-drawer
    v-model="drawer"
    title="I am the title"
    direction="rtl"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script setup>
import { inject } from "vue";

// 注入一个值，若为空则使用提供的默认值
const drawer = inject("isDrawerOpen", false);
const handleClose = (done) => {
  ElMessage("Drawer closed.");
  done();
};
</script>
