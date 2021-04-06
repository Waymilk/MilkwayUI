<!--
 * @Descripttion: 
 * @Author: Milkway
 * @Date: 2021-03-23 16:13:22
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-06 14:59:47
-->
<template>
  <h1>Switch 开关</h1>
  <Switch v-model:value="bool" />
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default{
  components:{
    Switch
  },
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin: 30px 0;
}
</style>