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
import Button from '../../lib/Button.vue';
import Demo from '../../components/common/Demo.vue';
import ButtonDemoTheme from '../../components/Button/ButtonDemoTheme.vue';
import ButtonDemoSize from '../../components/Button/ButtonDemoSize.vue';
import ButtonDemoLevel from '../../components/Button/ButtonDemoLevel.vue';
import ButtonDemoDisabled from '../../components/Button/ButtonDemoDisabled.vue';
import ButtonDemoLoading from '../../components/Button/ButtonDemoLoading.vue';

export default {
  components: {Button, Demo},
  setup() {
    return {ButtonDemoTheme, ButtonDemoSize, ButtonDemoLoading, ButtonDemoLevel, ButtonDemoDisabled};
  },
};
</script>