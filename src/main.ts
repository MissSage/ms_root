import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import router from "./router/index"
import { initQianKun } from "./plugins/qiankun"
import "element-plus/dist/index.css"
import "./styles/main.scss"
initQianKun(import.meta.env.DEV)
createApp(App).use(createPinia()).use(ElementPlus).use(router).mount("#app_main")
