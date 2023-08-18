import { useLayoutStore } from "@/store"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { qiankunSubAppsRoutes } from "./modules/qiankun"

export const routes: RouteRecordRaw[] = [
  {
    meta: {
      title: "首页"
    },
    path: "/",
    name: "layout",
    component: () => import("@/views/Home/index.vue")
  },
  ...qiankunSubAppsRoutes
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach(to => {
  const layoutStore = useLayoutStore()
  layoutStore.resolveRoutePathToCrActiveAppPath(to.path)
})
export default router
