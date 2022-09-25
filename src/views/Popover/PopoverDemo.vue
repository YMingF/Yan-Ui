<template>
  <div id="popoverDemo">
    <Demo :component="DiffPosition" :desc-component="DiffPosDesc"></Demo>
  </div>
  <!--  点击还是hover方式触发-->
  <Demo :component="DiffTrigger" :desc-component="DiffTriggerDesc"></Demo>
  <!--  在浮窗内关闭-->
  <Demo :component="IsVisible" :desc-component="isVisibleDesc"></Demo>
</template>

<script lang='ts'>
import Demo from '../../components/common/Demo.vue';
import DiffPosition from '../../components/Popover/DiffPosition/diffPosition.vue';
import DiffPosDesc from '../../components/Popover/DiffPosition/DiffPosDesc.vue';
import DiffTrigger from '../../components/Popover/DiffTrigger/DiffTrigger.vue';
import DiffTriggerDesc from '../../components/Popover/DiffTrigger/DiffTriggerDesc.vue';
import IsVisible from '../../components/Popover/isVisible/isVisible.vue';
import isVisibleDesc from '../../components/Popover/isVisible/isVisibleDesc.vue';

export default {
  components: {Demo},
  setup() {
    return {DiffPosition, DiffPosDesc, IsVisible, isVisibleDesc, DiffTrigger, DiffTriggerDesc};
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