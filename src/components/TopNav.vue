<template>
  <div class="topNav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
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
.topNav{
  background: cornflowerblue;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}

</style>