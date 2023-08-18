
import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import router from "./router/index"
import "./plugins/qiankun"
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import "./styles/main.scss"
createApp(App).use(createPinia()).use(router).mount("#app_main")
