<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">你好</Button>
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

</style>