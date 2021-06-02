<demo>
函数式调用
</demo>

<template>
  <Button @click="onClick">打开对话框</Button>
  <Dialog  v-model:visible="isShow" :closeOnClickOverlay="true" :ok="okFunction">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
     <p>这是一段内容</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Dialog
  },
  setup(){
    const isShow = ref(false)
    const onClick = ()=>{
      isShow.value = !isShow.value
    }
    const okFunction = () => {
      isShow.value = false
    }
    return {onClick,isShow,okFunction}
  }
};
</script>
