<template>
  <!--   控制展示位置-->
  <Demo :component="ToastPosition"></Demo>
  <!--  设计关闭按钮-->
  <Demo :component="CloseButton"></Demo>
  <!--  支持HTML-->
  <Demo :component="EnableHtml"></Demo>
  <!--  设置延时时长-->
  <Demo :component="CloseDelay"></Demo>
  <!--  设置是否自动关闭-->
  <Demo :component="AutoClose"></Demo>
</template>

<script lang='ts'>
import ToastPosition from '../../components/Toast/ToastPosition.vue';
import CloseButton from '../../components/Toast/CloseButton.vue';
import EnableHtml from '../../components/Toast/EnableHtml.vue';
import CloseDelay from '../../components/Toast/CloseDelay.vue';
import AutoClose from '../../components/Toast/AutoClose.vue';
import Demo from '../../components/common/Demo.vue';

export default {
  components: {
    Demo

  }, setup() {
    return {ToastPosition, CloseButton, EnableHtml, CloseDelay,AutoClose};
  }
};
</script>

<style lang='scss' scoped>

</style>