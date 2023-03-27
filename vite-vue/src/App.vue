<!-- src/App.vue -->
<template>
  <el-config-provider :locale="elLocale">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <el-switch
      v-model="langSwitch"
      style="
        --el-switch-on-color: #13ce66;
        --el-switch-off-color: #ff4949;
        margin: 10px auto 20px;
        display: block;
      "
      inline-prompt
      active-text="中"
      inactive-text="英"
      @change="handleChangeI18n"
    />

    <el-color-picker v-model="colorPicker" />

    <!-- <Login /> -->
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
// import Login from "./components/Login.vue";
import { ref, computed } from "vue";
// i18n
import { useI18n } from "vue-i18n";
// Element Plus全局配置国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const { locale } = useI18n({ useScope: "global" }); // vue-i18n提供了一个钩子函数 useI18n(),暴露出locale属性用于切换语言
locale.value = localStorage.getItem("locale") || "zh_CN"; // 页面首次加载显示的语言
const elLocale = computed(() => (locale.value === "zh_CN" ? zhCn : en)); // Element Plus组件国际化
// 中英文切换开关
const langSwitch = ref(locale.value === "zh_CN");
// 中英文切换事件
const handleChangeI18n = (val) => {
  // console.log(val);
  locale.value = val ? "zh_CN" : "en_US"; // true为中文，false为英文
  localStorage.setItem("locale", locale.value); // 本地缓存当前页面语言
};

// 取色器
const colorPicker = ref("#409EFF");
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
