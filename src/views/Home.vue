<template>
  <div>
    <div class="topNavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>Z-UI</h1>
        <h2>一个牛皮的框架</h2>
        <p class="actions">
          <a href="https://github.com/YMingF/Yan-Ui">GitHUb</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <!--    vue-->
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <!--    ts-->
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <!--    lights-->
      <svg class="icon">
        <use xlink:href="#icon-lights"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: {TopNav}
}
</script>


<style lang='scss' scoped>
$green: #02bcb0;
$border-radius: 4px;
$wordColor: #007974;
.topNavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%); // 实现圆弧效果
}

.banner {
  color: $wordColor;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>