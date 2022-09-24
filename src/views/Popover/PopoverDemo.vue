<template>
  <div id="popoverDemo">
    <Demo :component="popover"></Demo>
  </div>
</template>

<script lang='ts'>
import Demo from '../../components/common/Demo.vue';
import popover from '../../components/popover/commonDemo.vue';

export default {
  components: {Demo},
  setup() {
    return {popover};
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