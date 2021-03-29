<!--
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-25 09:17:59
 * @LastEditors: Milkway
 * @LastEditTime: 2021-03-25 15:00:33
-->
<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="onClick">toggle</Button>
  <Dialog  v-model:visible="isShow" :closeOnClickOverlay="true" :ok="okFunction">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>第一行</p>
      <p>第二行</p>
    </template>
  </Dialog>
</template>
<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
  components:{
    Dialog,
    Button
  },
  setup(props) {
    const isShow = ref(false)
    const onClick = ()=>{
      console.log(1232);
      isShow.value = !isShow.value
    }
    const okFunction = () => {
      // return false
    }
    return {onClick,isShow,okFunction}
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin: 30px 0;
}
</style>