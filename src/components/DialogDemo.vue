<!--
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-25 09:17:59
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-06 15:00:47
-->
<template>
  <h1 class="first-title">Dialog 对话框</h1>
    <section class="second-title">
      <h2>基础用法</h2>
    </section>
    <Demo :component="DialogNormal" />
    <section class="second-title">
      <h2>函数式调用</h2>
    </section>
    <Demo :component="DialogByFunc" />
    <Attr :data="data"></Attr>
</template>
<script>
import DialogNormal from "./DialogDemo/DialogNormal.vue";
import DialogByFunc from "./DialogDemo/DialogByFunc.vue";
import Demo from "./Demo.vue";
import Attr from "./Attr.vue";
import { ref } from "vue";
export default {
  components:{
    Demo,
    Attr
  },
  setup(props) {
    const data = ref([
      {
        params: 'visible',
        desc: '是否显示',
        type: 'boolean',
        select: 'false / true',
        default: 'false'
      },
      {
        params: 'width',
        desc: '宽度',
        type: 'string',
        select: '0%~100%',
        default: '60%'
      },
      {
        params: 'top',
        desc: '顶部距离',
        type: 'string',
        select: '数字',
        default: '300',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭弹出框	',
        type: 'boolean',
        select: 'false / true',
        default: 'false'
      },
      {
        params: 'ok',
        desc: '确认按钮触发函数',
        type: 'function',
        select: '',
        default: '',
      },
      {
        params: 'cancel',
        desc: '取消按钮触发函数',
        type: 'function',
        select: ' ',
        default: '',
      },
    ]);
    return { DialogNormal,DialogByFunc,data };
    // const isShow = ref(false)

    // const okFunction = () => {
    //   // return false
    // }
    // const showDialog = () =>{
    //   openDialog({
    //     title:'标题',
    //     content:'你好啊',
    //     ok(){
    //       console.log('ok函数')
    //     },
    //     cancel(){
    //       console.log('cancel函数')
    //     },
    //   })
    // }
    // return {onClick,isShow,okFunction,showDialog}
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin: 30px 0;
}
</style>