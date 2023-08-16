import { createRouter, createWebHistory } from "vue-router"
export const routes = [
  {
    meta: {
      title: "首页"
    },
    path: "/",
    name: "layout",
    component: () => import("@/views/Home/index.vue")
  },
  {
    meta: {
      title: "乾坤"
    },
    // /:chapters* 用来处理子应用的子路由，不然只能匹配到子应用的根路由/
    path: "/vue/",
    name: "vue",
    component: () => import("@/views/qiankun/index.vue"),
    children: [
      {
        meta: {
          title: "乾坤",
          hide: true
        },
        // /:chapters* 用来处理子应用的子路由，不然只能匹配到子应用的根路由/
        path: "/vue/:chapters*",
        name: "vue",
        component: () => import("@/views/qiankun/index.vue")
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
