<template>
  <router-view class="layout" ></router-view>
</template>
<script lang="ts">
import { provide, ref } from 'vue'
import {router} from './router'
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width > 500)
    provide('menuVisible',menuVisible)
    router.afterEach(() => {
      menuVisible.value = width > 500
    })
  }
}
</script>
<style lang="scss" scoped>
.layout{
  height: 100vh;
  overflow-y: scroll;
}
::-webkit-scrollbar
{
  width: 0;
  height: 0;
}
</style>
