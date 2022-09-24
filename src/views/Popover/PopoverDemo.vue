<template>
  <Demo :component="popover"></Demo>
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

</style>