<!--
 * @Descripttion: 
 * @Author: Milkway
 * @Date: 2021-03-30 13:59:50
 * @LastEditors: Milkway
 * @LastEditTime: 2021-03-31 14:02:42
-->
<template>
  <div>Tabs 示例</div>
  <h1>示例1</h1>
  <Tabs v-model:selected="title">
    <Tab title="学习">学习</Tab>
    <Tab title="吃饭">吃饭</Tab>
    <Tab title="睡觉">睡觉</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components:{
    Tabs,
    Tab
  },
  setup(props) {
    const title = ref('学习')
    return {title};
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin:16px 0
}
</style>