<template>
    <div>
      <TopNav/>
      <div class="content">
        <aside v-if="menuVisible">
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
        <main>
          <router-view />
        </main>
      </div>
    </div>
</template>


<script lang="ts">
  import TopNav from "../components/TopNav.vue";
  import {inject, Ref} from 'vue';
  export default {
    components: {TopNav},
    setup(){
      const menuVisible=inject<Ref<boolean>>('menuVisible') //<>就是在标记类型
      return {menuVisible} //无论是变量还是函数，都需要返回，才能够被外部的template用到
    }
  }
</script>

<style lang="scss" scoped>
  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;

    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
    @media (max-width: 500px){
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;

    }
  }
</style>