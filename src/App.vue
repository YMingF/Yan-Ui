<template>
<!--  路由要展示的组件直接展示到这即可！-->
  <router-view/>
</template>

<script lang="ts">

import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup(){
    const menuVisible=ref(false) //menuVisible是个ref也就是个盒子，里面有个值是false
    provide('menuVisible',menuVisible) //给menuVisible取名为menuVisible，子组件就可以通过menuVisible这个名字来获取到menuVisible的值
  }
}
</script>
