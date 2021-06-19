<demo>
常规用法
</demo>
<template>
  <Tabs v-model:selected="title">
    <Tab title="学习">学习</Tab>
    <Tab title="吃饭">吃饭</Tab>
    <Tab title="睡觉">睡觉</Tab>
  </Tabs>
</template>
<script lang="ts">
import {Tabs,Tab} from '../../lib/index'
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