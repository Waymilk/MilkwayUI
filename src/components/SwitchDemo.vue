<template>
  <div>
    <h1 class="first-title">Switch 开关</h1>
    <section class="second-title">
      <h2>基础用法</h2>
      <p>
        使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Switch</span>组件
      </p>
    </section>
    <Demo :component="SwitchNormal" />
    <section class="second-title">
      <h2>支持disabled属性</h2>
      <p>
        在<span>Switch</span>组件中添加<span>disabled</span>属性，以此来<span>禁用Switch</span>组件
      </p>
    </section>
    <Demo :component="SwitchDisabled" />
    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import SwitchNormal from "./SwitchDemo/SwitchNormal.vue";
import SwitchDisabled from "./SwitchDemo/SwitchDisabled.vue";
import Demo from "./Demo.vue";
import Attr from "./Attr.vue";
import { ref } from "vue";
export default {
  components: { Demo,Attr },
  setup() {
    const data = ref([
      {
        params: 'v-model:value',
        desc: '是否选中状态',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'disabled',
        desc: '是否禁用状态',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]);
    return { SwitchNormal,SwitchDisabled, data };
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