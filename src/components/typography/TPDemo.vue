<template>
  <!--  复制-编辑类型-->
  <div>
    <Demo :component="TPDemo"></Demo>
  </div>

</template>

<script lang='ts'>
import TPDemo from './TPCopyDemo.vue';
import Demo from '../common/Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {TPDemo};
  }
};
</script>

<style lang='scss' scoped>

</style>