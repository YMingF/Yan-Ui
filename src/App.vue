<template>
  <div>点击链接可切换下方展示的组件
  |
    <router-link to="/">test</router-link>
    |
    <router-link to="/x">test2</router-link>

  </div>
  <hr>
<!--  路由要展示的组件直接展示到这即可！-->
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
