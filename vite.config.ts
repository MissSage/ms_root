import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  plugins: [vue()],
  server: {
    // proxy: {
    //   "/junminrongheApi": {
    //     target: "http://localhost:5174", // 后台接口
    //     changeOrigin: true,
    //     secure: false, // 如果是https接口，需要配置这个参数
    //     // ws: true, //websocket支持
    //     rewrite: path => path.replace(/^\/junminrongheApi/, "")
    //   }
    // }
  }
})
