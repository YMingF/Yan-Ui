<template>
  <div id="popoverDemo">
    <Demo :component="DiffPosition"></Demo>
  </div>
  <!--  点击还是hover方式触发-->
  <Demo :component="IsVisible"></Demo>
</template>

<script lang='ts'>
import Demo from '../../components/common/Demo.vue';
import DiffPosition from '../../components/Popover/diffPosition.vue';
import IsVisible from '../../components/Popover/isVisible.vue';

export default {
  components: {Demo},
  setup() {
    return {DiffPosition, IsVisible};
  }
};
</script>

<style lang='scss' scoped>
#popoverDemo {
  :deep(.demo-component) {
    left: 50%;
    position: relative;
    transform: translateX(-25%);
  }

  :deep(.placeTop,) {
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :deep(.placeMiddle,) {
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :deep(.placeBottom,) {
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>