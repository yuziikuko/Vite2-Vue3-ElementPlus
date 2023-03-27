<template>
  <div style="padding: 50px 0 0">
    <h1 style="font-size: 50px; font-weight: bolder">{{ t("title.login") }}</h1>
  </div>

  <el-form
    ref="loginFormRef"
    :model="loginForm"
    status-icon
    :rules="loginFormRules"
    label-width="120px"
  >
    <el-form-item :label="t('label.email')" prop="email">
      <el-input v-model="loginForm.email"></el-input>
    </el-form-item>
    <el-form-item :label="t('label.password')" prop="pass">
      <el-input v-model="loginForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(loginFormRef)">
        {{ t("button.submit") }}
      </el-button>
      <el-button @click="resetForm(loginFormRef)">
        {{ t("button.reset") }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Login } from "../axios/api";

// 导入t函数
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// 配置了按需导入Element-Plus则不用引入，否则反而会丢失样式
// import { ElMessage } from "element-plus";

// 路由对象
const router = useRouter();

// 表单数据
const loginFormRef = ref();
const loginForm = reactive({
  email: "111@test.com",
  pass: "test",
});

// 表单规则
const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (loginForm.checkPass !== "") {
      if (!loginFormRef.value) return;
      loginFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const loginFormRules = reactive({
  email: [
    {
      required: true,
      message: "Please input email address",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Please input correct email address",
      trigger: ["blur", "change"],
    },
  ],
  pass: [
    {
      required: true,
      validator: validatePass,
      trigger: "blur",
    },
  ],
});

// 表单方法
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // // axios接口
      // Login(loginForm).then((response) => {
      //   const { code, msg, data: res } = response.data;
      //   if (code === 0) {
      //     localStorage.setItem("token", res.token);
      //     ElMessage.success(msg ?? "Submitted!");
      //     router.push({
      //       path: "/", // HelloWorld.vue在路由配置文件中定义的路径
      //       params: {
      //         isLogged: true,
      //       },
      //     });
      //   } else {
      //     ElMessage.error(msg);
      //   }
      // });

      // Demo 直接登录
      localStorage.setItem("token", "test token");
      ElMessage.success("Submitted!");
      router.push({
        // path: "/", // HelloWorld.vue在路由配置文件中定义的路径
        name: "HelloWorld", // name 搭配 params 传参、path 搭配 query 传参
        params: {
          isLogged: true,
        },
      });
    } else {
      ElMessage.error("Oops, error submit!");
      return false;
    }
  });
};
const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
