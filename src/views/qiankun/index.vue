<template>
  <div id="subAppContainerVue3"></div>
</template>

<script lang="ts" setup>
import { start } from "qiankun"
import { onMounted } from "vue"

onMounted(() => {
  // 启动 qiankun
  // if (!window.qiankunStarted) {
  //   window.qiankunStarted = true


  // }
  start({
    prefetch: 'all', // 预加载
    sandbox: {
      // experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
      // strictStyleIsolation: true
    },
  })
})
</script>
<style>
#subAppContainerVue3 {
  height: 100%;
}

#subAppContainerVue3>div {
  height: 100%;
}
</style>