<template>
  <template v-if="visible">
    <teleport to='body' >
      <div class="milk-dialog-overlay" @click="closeOnClickOverlay"></div>
      <div class="milk-dialog-wrapper" :style="`top:${top}px;width:${width}`">
        <div class="milk-dialog">
          <header>
            <slot name="title"/>
            <span class="milk-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button size="normal" theme="primary" @click="ok">OK</Button>
            <Button size="normal" @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>
<script lang="ts">
import Button from './Button.vue'
export default {
  props:{
    visible:{
      type:Boolean,
      default:false
    },
    width:{
      type:String
    },
    top:{
      type:String,
      default:'300'
    },
    closeOnClickOverlay:{
      type:Boolean,
      default:true
    },
    ok:{
      type:Function
    },
    cancel:{
      type:Function
    }
  },
  components:{
    Button
  },
  emits: ["update:visible"],
  setup(props,context){
    const close = ()=>{
      context.emit('update:visible',!props.visible)
    }
    const closeOnClickOverlay = () =>{
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const ok = ()=>{
      if (props.ok && props.ok() !== false) {
        close()
      }
    }
    const cancel = ()=>{
      if (props.cancel && props.cancel() !== false) {
        close()
      }
    }
    return {close,closeOnClickOverlay,ok,cancel}
  }
}
</script>
<style lang="scss" >
$radius: 4px;
$border-color: #d9d9d9;
.milk-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 30;
  }
  &-wrapper {
    width: 60%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 31;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 24px;
    font-size: 14px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 4px 2px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>