<!--
 * @Descripttion: 
 * @Author: Milkway
 * @Date: 2021-03-23 16:13:22
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-07 14:14:04
-->
<template>
  <h1>Switch 开关</h1>
  <Switch v-model:value="switch1" />
  <Switch v-model:value="switch2" disabled />
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default{
  components:{
    Switch
  },
  setup(){
    const switch1 = ref(false)
    const switch2 = ref(false)
    return {switch1,switch2}
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin: 30px 0;
}
</style>