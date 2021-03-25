<!--
 * @Descripttion: 
 * @Author: Milkway
 * @Date: 2021-03-25 09:17:59
 * @LastEditors: Milkway
 * @LastEditTime: 2021-03-25 15:07:34
-->
<template>
  <button class="milk-button" :class="classes">
    <span class="milk-button-spin" v-if="loading"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from 'vue'
export default {
  inheritAttrs:false,
  props:{
    theme:{
      type:String,
      default:'default'
    },
    size:{
      type:String,
      default:'normal'
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context) {
    const {size,theme,loading} = props
    const classes = computed(()=>{
      const loadingClass = loading ? "milk-button-loading" : "";
      return `milk-button-theme-${theme} milk-button-size-${size} ${loadingClass}`
    })
    return {classes}
  }
}
</script>
<style lang="scss" >
@mixin hover-color($color){
  background-color: $color;
  color: #fff;
  border-color: $color;
  &:hover{
    background-color:rgba( $color,0.7);
    border-color:rgba( $color,0.7);
    color: #fff;
  }
}
.milk-button{
  border-radius: 4px;
  line-height: 1;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  box-sizing: border-box;
  font-size: 14px;
  margin: 8px;
  padding: 12px 20px;
  box-sizing:border-box;
  background: #fff;
  border: 1px solid #ccc;
  transition: all 0.3s;
  &:hover{
    color:#409eff;
    border-color:#409eff;
  }
  &:focus{
    outline: none;
  }
  &-theme-primary{
    @include hover-color(#409eff)
  }
  &-theme-warning{
    @include hover-color(#e6a23c)
  }
  &-theme-danger{
    @include hover-color(#f56c6c)
  }
  &-size-small{
    padding: 8px 12px;
    font-size: 12px;
  }
  &-size-large{
    padding: 14px 26px;
    font-size: 18px;
  }
  &-text{
    border: none;
    padding: 0;
    background: none;
    &:hover{
      color:#409eff;
    }
  }
  &-spin{
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    margin-right:4px;
    border-color: #409eff #409eff #409eff transparent;
    animation: 1s linear infinite z-spin;
  }
}
@keyframes z-spin{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>