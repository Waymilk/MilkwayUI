<!--
 * @Descripttion: 
 * @Author: Milkway
 * @Date: 2021-03-25 09:17:59
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-08 10:43:51
-->
<template>
  <div>
    <h1 class="first-title">Input 输入框</h1>
    <section class="second-title">
      <h2>基础用法</h2>
    </section>
    <Demo :component="InputNormal" />
    <section class="second-title">
      <h2>支持disabled属性</h2>
    </section>
    <Demo :component="InputDisabled" />
    <section class="second-title">
      <h2>可清除</h2>
    </section>
    <Demo :component="InputClearable" />
    <!-- <section class="second-title">
      <h2>加载中</h2>
    </section>
    <Demo :component="ButtonLoading" /> -->
    <!-- <Attr :data="data"></Attr> -->
  </div>
</template>
<script lang="ts">
import InputNormal from "./InputDemo/InputNormal.vue";
import InputDisabled from "./InputDemo/InputDisabled.vue";
import InputClearable from "./InputDemo/InputClearable.vue";
import Demo from "./Demo.vue";
import Attr from "./Attr.vue";
import { ref } from "vue";
export default {
  components: { Demo,Attr },
  setup() {
    const data = ref([
      {
        params: 'theme',
        desc: '主题',
        type: 'string',
        select: 'default/primary/warning/danger',
        default: 'default'
      },
      {
        params: 'size',
        desc: '尺寸',
        type: 'string',
        select: 'normal/small/large',
        default: 'normal'
      },
      {
        params: 'disabled',
        desc: '是否禁用状态',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'loading',
        desc: '是否加载中状态',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'loadingColor',
        desc: '加载icon颜色',
        type: 'string',
        select: '颜色值',
        default: '',
      },
    ]);
    return { InputNormal,InputDisabled,InputClearable,data };
  },
};
</script>
<style lang="scss" scoped>
.second-title{
  margin: 40px 0;
  h2{
    margin: 30px 0;
  }
}
</style>