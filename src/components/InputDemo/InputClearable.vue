<demo>
可清除
</demo>

<template>
  <Input v-model:value="text" clearable></Input>
</template>

<script lang="ts">
import Input from "../../lib/Input.vue"
import {ref} from 'vue';
export default {
  components: {Input},
  setup(){
    const text = ref('')
    return {text}
  }
};
</script>