<demo>
函数式调用
</demo>

<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts">
import {Button,Dialog} from "../../lib/index";
import {openDialog} from '../../lib/openDialog';
export default {
  components: {
    Button,
    Dialog
  },
  setup(){
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
    return {showDialog}
  }
};
</script>