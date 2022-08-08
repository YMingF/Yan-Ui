<template>
  <div>
    <!--  Theme示例-->
    <Demo :component="ButtonDemoTheme"></Demo>
  </div>
  <div>
    <!-- size示例 -->
    <Demo :component="ButtonDemoSize"></Demo>
  </div>
  <!--  level示例-->
  <div>
    <Demo :component="ButtonDemoLevel"></Demo>
  </div>
  <!--  按钮置灰-->
  <div>
    <Demo :component="ButtonDemoDisabled"></Demo>
  </div>

  <!--  loading-->
  <div>
    <Demo :component="ButtonDemoLoading"></Demo>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
import Demo from '../components/Demo.vue';
import ButtonDemoTheme from './ButtonDemoTheme.vue';
import ButtonDemoSize from '../components/ButtonDemoSize.vue';
import ButtonDemoLevel from '../components/ButtonDemoLevel.vue';
import ButtonDemoDisabled from '../components/ButtonDemoDisabled.vue';
import ButtonDemoLoading from '../components/ButtonDemoLoading.vue';

export default {
  components: {Button, Demo},
  setup() {
    return {ButtonDemoTheme, ButtonDemoSize, ButtonDemoLoading, ButtonDemoLevel, ButtonDemoDisabled};
  },
};
</script>