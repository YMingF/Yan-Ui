<template>
    <div class="layout">
      <TopNav :toggleMenuButtonVisible="true" class="nav"/>
      <div class="content">
        <div class="sideBarContainer">
          <aside v-if="menuVisible">
            <section class="sidebar-group">
              <p class="sidebar-group-title">文档</p>
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
            </section>
            <section class="sidebar-group">
              <p class="sidebar-group-title">Basic 基础组件</p>
              <ol>
                <li>
                  <router-link to="/doc/button">Button 组件</router-link>
                </li>
                <li>
                  <router-link to="/doc/grid">Grid 栅格</router-link>
                </li>


                <li>
                  <router-link to="/doc/typo">Typography 组件</router-link>
                </li>
              </ol>
            </section>
            <!--          -->

            <section class="sidebar-group">
              <p class="sidebar-group-title">Form表单组件</p>
              <ol>
                <li>
                  <router-link to="/doc/checkbox">Checkbox多选框</router-link>
                </li>
                <li>
                  <router-link to="/doc/input">Input 输入框</router-link>
                </li>
                <li>
                  <router-link to="/doc/switch">Switch 开关</router-link>
                </li>
              </ol>
            </section>
            <section class="sidebar-group">
              <p class="sidebar-group-title">Data数据展示</p>
              <ol>
                <li>
                  <router-link to="/doc/carousel">Carousel 走马灯</router-link>
                </li>
                <li>
                  <router-link to="/doc/collapse">Collapse 折叠面板</router-link>
                </li>
              </ol>
            </section>
            <section class="sidebar-group">
              <p class="sidebar-group-title">Navigation 导航</p>
              <ol>
                <li>
                  <router-link to="/doc/tabs">Tabs 标签页</router-link>
                </li>
                <li>
                  <router-link to="/doc/backTop">BackTop 回到顶部</router-link>
                </li>
              </ol>

            </section>
            <!--          -->
            <section class="sidebar-group">
              <p class="sidebar-group-title">Feedback 反馈组件</p>
              <ol>
                <li>
                  <router-link to="/doc/alert">Alert 提示</router-link>
                </li>
                <li>
                  <router-link to="/doc/dialog">Dialog 对话框</router-link>
                </li>
                <li>
                  <router-link to="/doc/loading">Loading 加载</router-link>
                </li>
                <li>
                  <router-link to="/doc/notification">Notification 通知</router-link>
                </li>
                <li>
                  <router-link to="/doc/popover">Popover 弹出框</router-link>
                </li>
                <li>
                  <router-link to="/doc/toast">Toast</router-link>
                </li>
              </ol>
            </section>
            <!--          -->
            <div class="vertical-scroll">
              <div class="rail">
              </div>
            </div>
          </aside>
        </div>
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
    setup() {
      const menuVisible = inject<Ref<boolean>>('menuVisible'); //<>就是在标记类型
      return {menuVisible}; //无论是变量还是函数，都需要返回，才能够被外部的template用到
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
    padding-left: 300px;
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
  position: fixed;
  width: 300px;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  margin-top: 70px;
  padding: 0 48px 90px 48px;
  overflow-y: scroll;
  overscroll-behavior: contain;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #fff;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: whitesmoke;
    opacity: 0.2;
  }
  &:hover{
    &::-webkit-scrollbar {
      display: block;
    }
  }

  .sidebar-group {
    padding-top: 24px;

    .sidebar-group-title {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 8px;
      line-height: 24px;
    }

    ol {

      > li {
        position: relative;

        > a {
          padding: 10px 16px;
          display: block;
          text-decoration: none;
          border-radius: 8px;

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
            background-color: rgba(64, 158, 255, 0.1);
          }

          //&.router-link-active:after {
          //  opacity: 1;
          //  transform: scaleY(1);
          //}
        }

      }
    }


  }


}
</style>