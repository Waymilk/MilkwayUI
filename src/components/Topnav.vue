<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">
      LOGO
    </div>
    <ul class="menu">
      <li>
        <router-link  to="/doc">菜单1</router-link>
      </li>
      <li>
        <router-link  to="/">菜单2</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('xxx')
    console.log(`topnav 获取的 menuVisible 的值为${menuVisible.value}`);
    const toggleMenu = () =>{
      menuVisible.value = !menuVisible.value

    }
    return {toggleMenu}
  }
}
</script>
<style lang="scss" scoped>
.topnav{
  background:#ccc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: #05538c;
  display: flex;
  padding: 14px;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  box-sizing:border-box;
  height: 58px;
  .menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    li{
      list-style:none;
      margin: 0 1em;
    }
  }
}
</style>