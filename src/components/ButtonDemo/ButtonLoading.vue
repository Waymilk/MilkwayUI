<demo>
加载中
</demo>

<template>
  <Button theme="default" loading >加载中</Button>
  <Button theme="primary" loading loadingColor="#fff">加载中</Button>
  <Button theme="warning" loading loadingColor="#fff">加载中</Button>
  <Button theme="danger" loading loadingColor="#fff">加载中</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>