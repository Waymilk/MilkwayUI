<!--
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-25 09:17:59
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-07 14:12:33
-->
<template>
  <div>
    <button @click="toggle" class="milk-switch" :disabled="disabled" :class="{'z-checked' : value}"><span></span></button>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default{
  props:{
    value:Boolean,
    disabled:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    const toggle = () =>{
      context.emit('update:value',!props.value)
    }
    return {
      toggle
    }
  }
}
</script>
<style lang="scss" >
$height: 20px;
$width: 40px;
.milk-switch {
  cursor: pointer;
  height: $height;
  min-width: $width;
  border: none;
  background: #e3e3e3;
  border-radius: $height /2;
  position: relative;
  margin: 0;
  padding: 0;
  outline: none;
  > span {
    position: absolute;
    top: 2px;
    left: 1px;
    height: 16px;
    width: 16px;
    background: #fdfdfd;
    border-radius: 100%;
    transition: all .3s;
  }
  &.z-checked {
    background: #7e92da;
  }
  &.z-checked > span {
    left: 100%;
    margin-left: -1px;
    transform: translateX(-100%);
  }
  &:active {
    > span {
      width: $height + 2px;
    }
  }
  &.z-checked:active {
    > span {
      width: $height + 2px;
    }
  }
  &:disabled{
    cursor: not-allowed;
  }
}
</style>