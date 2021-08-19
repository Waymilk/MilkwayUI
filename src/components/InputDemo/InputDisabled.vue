<demo>
支持 disabled
</demo>

<template>
  <Input v-model:value="val" disabled></Input>
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