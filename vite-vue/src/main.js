// src/main.js
import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import App from "./App.vue";

// 引入Vue-Router
import Router from "./router";

// 引入Vue-i18n
import i18n from "./lang";
// Element Plus全局配置国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const app = createApp(App);

// // 引入Axios
// import axios from "axios";
// // 后端接口域名
// axios.defaults.baseURL = "https://XXX.com";
// /**
//  * 将axios挂载为app的全局自定义属性后，每个组件可以通过this直接访问到全局挂载的自定义属性
//  * e.g. this.$http.get('/login');
//  * ===================================
//  * 如果使用组合式API【setup()语法】，由于vue3.0没有this，需要使用getCurrentInstance来获取上下文
//  * e.g.如下
//  */
// // const { proxy } = getCurrentInstance();
// // proxy.$http.get("/api/getNewsList").then((response) => {
// //   console.log(response);
// // });
// app.config.globalProperties.$http = axios; // 关键语句

// app.use(ElementPlus);
app.use(ElementPlus, {
  // locale: zhCn,
  locale: localStorage.getItem("locale") === "zh_CN" ? zhCn : en,
});
app.use(Router);
app.use(i18n);
app.mount("#app");
