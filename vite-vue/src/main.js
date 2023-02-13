// src/main.js
import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import App from "./App.vue";
import Router from "./router"; // 引入Vue-Router

const app = createApp(App);
app.use(ElementPlus);
app.use(Router);
app.mount("#app");
