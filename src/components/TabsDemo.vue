<!--
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-30 13:59:50
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-06 15:01:25
-->
<template>
  <h1>Tabs 标签</h1>
  <section class="second-title">
    <h2>基础用法</h2>
  </section>
  <Demo :component="TabsNormal" />
  <Attr :data="data"></Attr>
</template>
<script lang="ts">
import TabsNormal from "./TabsDemo/TabsNormal.vue";
import { ref } from 'vue'
import Demo from "./Demo.vue";
import Attr from "./Attr.vue";
export default {
  components:{
    Demo,
    Attr
  },
  setup(props) {
    const title = ref('学习')
    const data = ref([
      {
        params: 'tab',
        desc: 'tab页签',
        type: 'component',
        select: 'tab',
        default: '',
      }
    ]);
    return {title,TabsNormal, data};
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin:30px 0
}
</style>