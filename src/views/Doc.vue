<template>
    <div class="layout">
      <TopNav :toggleMenuButtonVisible="true" class="nav"/>
      <div class="content">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/start">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/alert">Alert 提示</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/collapse">Collapse</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>


            <li>
              <router-link to="/doc/grid">Grid 栅格</router-link>
            </li>
            <li>
              <router-link to="/doc/notification">Notification 通知</router-link>
            </li>

            <li>
              <router-link to="/doc/input">Input 组件</router-link>
            </li>

            <li>
              <router-link to="/doc/popover">Popover</router-link>
            </li>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/toast">Toast</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/typo">Typography 组件</router-link>
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
  import TopNav from "../components/common/TopNav.vue";
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  background: #fff;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 1;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      position: relative;

      > a {
        padding: 4px 16px;
        display: block;
        text-decoration: none;

        &:hover {
          color: #1890ff
        }

        &:after {
          content: "";
          top: 0;
          right: 0;
          height: 100%;
          position: absolute;
          bottom: 0;
          opacity: 0;
          border-right: 3px solid #1890ff;
          transform: scaleY(.0001);
          transition: transform .40s cubic-bezier(.215, .61, .355, 1), opacity .40s cubic-bezier(.215, .61, .355, 1);
        }

        &.router-link-active {
          color: #1890ff;
          background-color: #e6f7ff;
        }

        &.router-link-active:after {
          opacity: 1;
          transform: scaleY(1);
        }
      }

    }
  }

  main {
    overflow: auto;
  }
}
</style>