<template>
  <template v-if="props.menu.meta?.hide">
  </template>
  <template v-else>
    <el-sub-menu v-if="children?.length" :index="props.menu.path">
      <template #title>{{ props.menu.meta?.title }}</template>
      <SideMenuItem v-for="item in children" :key="item.path" :menu="item"></SideMenuItem>
    </el-sub-menu>
    <el-menu-item v-else :index="props.menu.path">{{ props.menu.meta?.title }}</el-menu-item>
  </template>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { RouteRecordRaw } from "vue-router"

const props = defineProps<{ menu: RouteRecordRaw }>()
const children = computed(() => props.menu.children?.filter(item => item.meta?.hide !== true))
</script>
<style lang="scss" scoped></style>
