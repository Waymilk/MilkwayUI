<!--
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-25 09:17:59
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-06 15:00:47
-->
<template>
  <h1>Dialog 对话框</h1>
  <Button @click="onClick">toggle</Button>
  <Dialog  v-model:visible="isShow" :closeOnClickOverlay="true" :ok="okFunction">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
     <p>这是一段信息</p>
     <p>这是一段信息</p>
    </template>
  </Dialog>
  <Button @click="showDialog">show</Button>
</template>
<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog.ts'
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
    const showDialog = () =>{
      openDialog({
        title:'标题',
        content:'你好啊',
        ok(){
          console.log('ok函数')
        },
        cancel(){
          console.log('cancel函数')
        },
      })
    }
    return {onClick,isShow,okFunction,showDialog}
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin: 30px 0;
}
</style>