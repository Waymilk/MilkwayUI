<template>
  <div>
    <div v-for="(title,index) in titles" :key="index">{{title}}</div>
    <component v-for="d in defaults" :is="d"></component>
  </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props,context) {
    const defaults = context.slots.default()
    defaults.forEach((tag)=>{
      if(tag.type !== Tab){
        throw Error('Tabs 子标签必须为 Tab')
      }
    })
    const titles = defaults.map((tag)=>{
      return tag.props.title
    })
    return {defaults,titles}
  }
}
</script>