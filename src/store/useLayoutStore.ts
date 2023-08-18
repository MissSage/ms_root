import { acceptHMRUpdate, defineStore } from "pinia"
import { qiankunSubAppsRoutes } from "@/router/modules/qiankun"
export const useLayoutStore = defineStore("user", {
  state: () => {
    return {
      curActiveAppPath: "/",
      isDark: true
    }
  },
  actions: {
    setCurActiveAppPath(path: string) {
      this.$patch({
        curActiveAppPath: path
      })
    },
    resolveRoutePathToCrActiveAppPath(path: string) {
      const nextAppPath = qiankunSubAppsRoutes.find(item => path.startsWith(item.path))?.path ?? "/"
      this.setCurActiveAppPath(nextAppPath)
    },
    toggleIsDark(isDark: boolean) {
      this.$patch({
        isDark: isDark
      })
    }
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
}
