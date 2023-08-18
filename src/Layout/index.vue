<template>
  <div class="main-layout">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue"
</script>
<style lang="scss" scoped>
.main-layout {
  position: relative;
  width: 100%;
  height: 100%;
  .container{
    height: calc(100% - 60px);
  }
}
</style>
