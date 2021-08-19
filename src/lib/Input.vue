<template>
  <div class="milk-input">
    <input class="milk-input__inner" :value="value" @input="handleInput" :disabled="disabled" :class="{'milk-input--suffix':clearable}">
    <span class="milk-input__suffix" v-if="clearable && value.length" @click="clearVal">
      <svg class="icon"  fill="#fff">
          <use xlink:href="#iconshanchu"></use>
        </svg>
    </span>
  </div>
</template>
<script lang="ts">
export default {
  name:'Input',
  props:{
    value:String,
    disabled:{
      type:Boolean,
      default:false
    },
    clearable:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context) {
    const handleInput  = (e) =>{
      context.emit('update:value',e.target.value)
    }
    const clearVal  = (e) =>{
      context.emit('update:value','')
    }
    return{handleInput,clearVal}
  }
}
</script>
<style lang="scss" scoped>
.milk-input{
  position: relative;
  font-size: 14px;
  display: inline-block;
  &:hover{
    .milk-input__suffix{
      display: inline-block;
    }
  }
  
  &__inner{
    width: 200px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    font-size: 14px;
    border-radius: 4px;
    padding: 0 10px;
    transition: all 0.4s;
    &:focus{
      border-color: #409eff;
      +.milk-input__suffix{
        display: inline-block;
      }
    }
    &:hover{
      border-color: rgb(185 185 185);
    }
    &:disabled{
        background-color:#f5f7fa;
        cursor: not-allowed;
        color: #c0c4cc;
    }
  }
  &--suffix{
      padding-right: 30px;
  }
  &__suffix{
    display: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &:active{
      color: #fff;
    }
    .icon{
      font-size: 18px;
    }
  }
}
</style>