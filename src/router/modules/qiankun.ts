import { subApps } from "@/plugins/qiankun"
import { RouteRecordRaw } from "vue-router"

export const qiankunSubAppsRoutes: RouteRecordRaw[] = subApps.map(item => {
  return {
    meta: {
      title: item.title
    },
    // /:chapters* 用来处理子应用的子路由，不然只能匹配到子应用的根路由/
    path: item.activeRule,
    name: item.routeName,
    component: () => import("@/views/qiankun/index.vue"),
    children: [
      {
        meta: {
          title: item.title,
          hide: true
        },
        // /:chapters* 用来处理子应用的子路由，不然只能匹配到子应用的根路由/
        path: item.activeRule + "/:chapters*",
        name: item.routeName,
        component: () => import("@/views/qiankun/index.vue")
      }
    ]
  }
})
