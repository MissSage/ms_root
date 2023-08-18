
import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import router from "./router/index"
import { initQianKun } from "./plugins/qiankun"
import "./styles/main.scss"
initQianKun(import.meta.env.DEV)
createApp(App).use(createPinia()).use(router).mount("#app_main")
