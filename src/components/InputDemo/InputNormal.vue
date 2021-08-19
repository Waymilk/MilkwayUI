<demo>
常规用法
</demo>

<template>
  <Input v-model:value="val"></Input>
</template>

<script lang="ts">
import Input from "../../lib/Input.vue"
import {ref} from 'vue';
export default {
  components: {Input},
  setup(){
    const val = ref(null)
    return {val}
  }
};
</script>