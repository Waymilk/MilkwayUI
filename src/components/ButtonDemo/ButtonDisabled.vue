<demo>
支持 disabled
</demo>
<template>
  <Button theme="default" disabled >禁用状态</Button>
  <Button theme="primary" disabled >禁用状态</Button>
  <Button theme="warning" disabled >禁用状态</Button>
  <Button theme="danger" disabled >禁用状态</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  }
};
</script>