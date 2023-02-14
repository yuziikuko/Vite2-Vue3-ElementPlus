// src/axios/request.js
import axios from "axios";
import { ElMessage } from "element-plus";
import router from "../router";

/**
 * axios基础配置
 */
const service = axios.create({
  baseURL: "/api", // api的base_url
  timeout: 600000, // 请求超时时间
  // headers: {
  // "Access-Control-Allow-Credentials": true
  // }, // 请求头信息
  withCredentials: false, // 跨域请求时是否需要使用凭证，默认 false
  responseType: "json", // 服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream',默认 json
});

/**
 * 请求拦截器
 * 函数参数1：在发送请求之前做些什么
 * 函数参数2：对请求错误做些什么
 */
service.interceptors.request.use(
  (config) => {
    //判断token是否存在，存在即已登录
    if (localStorage.token) {
      // 请求头携带token
      config.headers.Authorization = `Bearer ${localStorage.token}`;
    } else {
      // token不存在，即未登录，跳转登录页
      router.replace("/login");
    }
    return config;
  },
  (error) => {
    ElMessage(error);
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 * 函数参数1：对响应数据做点什么
 * 函数参数2：对响应错误做点什么
 */
service.interceptors.response.use(
  (response) => {
    console.log(`code: ${response.data.code}`);
    if (response.data.code === 401) {
      console.log("token过期");
      localStorage.removeItem("token");
      router.replace("/login");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
