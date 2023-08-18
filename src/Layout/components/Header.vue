<template>
  <div class="main-app-header">

    <el-menu class="menu-bar" :mode="'horizontal'" :ellipsis="false" :default-active="layoutStore.curActiveAppPath" router>
      <SideMenuItem v-for="item in routes" :key="item.path" :menu="item"></SideMenuItem>
    </el-menu>
    <el-divider class="menu-item" :direction="'vertical'"></el-divider>
    <el-switch
    class="menu-item"
    v-model="isDark"
    inline-prompt
    :active-text="'黑'"
    :inactive-text="'白'"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #13ce66"
    @change="toggle"
  />
  </div>
</template>
<script lang="ts" setup>
import { routes } from "@/router"
import { useLayoutStore } from '@/store'
import SideMenuItem from "./SideMenuItem.vue"
const layoutStore = useLayoutStore()

const isDark = useDark()

const checkMediaTheme = () => {
  const saved = localStorage.getItem('vueuse-color-scheme')
  if (
    saved === 'auto'
      ? window.matchMedia(`(prefers-color-scheme: dark)`).matches
      : saved === 'dark'
  ) {
    document.documentElement.classList.add('dark')
    layoutStore.toggleIsDark(true)
  } else {
    layoutStore.toggleIsDark(false)
  }
}
const toggle = (value: any) => {
  layoutStore.toggleIsDark(value)
}
onMounted(()=>{
  checkMediaTheme()
})
</script>
<style lang="scss" scoped>
.main-app-header{
  width: 100%;
  .menu-bar{
    width: calc(100% - 80px);
    display: inline-flex;
    overflow: auto;
    &::-webkit-scrollbar{
      display: none;
    }
  }
  .menu-item{
    display: inline-flex;
  }
}
</style>
