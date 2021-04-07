<!--
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-25 09:17:59
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-07 14:33:04
-->
<template>
  <h1>Button 按钮</h1>
  <div>
    <Button>默认按钮</Button>
    <Button theme="primary">普通按钮</Button>
    <Button theme="warning">警告按钮</Button>
    <Button theme="danger">危险按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
  <div>
    <Button size="small">小型按钮</Button>
    <Button size="normal">普通按钮</Button>
    <Button size="large">大型按钮</Button>
  </div>
  <div>
    <Button loading >加载中</Button>
    <Button theme="primary" loading loadingColor="#fff">加载中</Button>
    <Button theme="warning" loading loadingColor="#fff">加载中</Button>
    <Button theme="danger" loading loadingColor="#fff">加载中</Button>
  </div>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="primary" disabled>禁用按钮</Button>
    <Button theme="warning" disabled>禁用按钮</Button>
    <Button theme="danger" disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
</template>
<script>
import Button from '../lib/Button.vue'
export default {
  components:{
    Button
  },
  setup(props) {
    const onClick = ()=>{
      console.log(1233);
    }
    return {onClick}
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin: 30px 0;
}
</style>