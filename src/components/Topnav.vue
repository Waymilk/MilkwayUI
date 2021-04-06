<!--
 * @Descripttion: 
 * @Author: Milkway
 * @Date: 2021-03-23 16:13:22
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-06 14:18:49
-->
<template>
  <div class="topnav">
    <div class="logo">
      <icon-svg icon-class="milk" />
    </div>
    <ul class="menu">
      <li>
        <router-link  to="/doc">菜单1</router-link>
      </li>
      <li>
        <router-link  to="/">菜单2</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleMenu">
      <icon-svg icon-class="Menu" />
    </span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
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
  z-index: 10;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  box-sizing:border-box;
  height: 58px;
  .logo{
      font-size: 38px;
      margin-top: -2px;
  }
  .menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    li{
      list-style:none;
      margin: 0 1em;
      color:#2a1aaf;
    }
  }
  .toggleAside{
    display: inline-block;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left: 16px;
    display: none;
    font-size: 34px;
  }
  @media (max-width:500px) {
    .menu{
      display: none;
    }
    .logo{
      margin: 0 auto;
    }
    .toggleAside{
      display: inline-block;
    }
  }
}
</style>