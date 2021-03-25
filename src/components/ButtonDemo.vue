<!--
 * @Descripttion: 
 * @Author: Milkway
 * @Date: 2021-03-25 09:17:59
 * @LastEditors: Milkway
 * @LastEditTime: 2021-03-25 15:00:33
-->
<template>
  <div>Button示例</div>
  <h1>示例1</h1>
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
    <Button :loading="true">加载中</Button>
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