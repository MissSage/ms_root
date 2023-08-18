import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath } from "node:url"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  plugins: [
    vue(), // ...
    AutoImport({
      // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
      // 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
      imports: ["vue"],
      // 第三方组件库的解析器
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ["src/components/"],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ["vue", "md"],
      // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
      resolvers: [ElementPlusResolver()]
    })
  ],
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
