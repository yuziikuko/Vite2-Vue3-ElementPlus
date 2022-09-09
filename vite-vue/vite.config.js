import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 自动导入Element Plus
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入Element Plus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: "0.0.0.0", // 监听所有地址（局域网和公网）
    port: "5000", // 自定义端口号
  },
});
