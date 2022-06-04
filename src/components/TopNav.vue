<template>
  <div class="topNav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-banner"></use>
      </svg>
      ZUI
    </div>

    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"> </span>

  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup(){
    const menuVisible=inject<Ref<boolean>>('menuVisible') //<>就是在标记类型
    const toggleMenu=()=>{
      menuVisible.value=!menuVisible.value
    }
    return {toggleMenu} //只有return之后，外部的template才能获取到这个函数
  }
}
</script>
<style lang="scss" scoped>
$wordColor: #007974;
.topNav {
  color: $wordColor;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px){
      > .menu{display: none; }
      > .logo{ margin: 0 auto;}
      > .toggleAside{display: inline-block;}
  }
}

</style>