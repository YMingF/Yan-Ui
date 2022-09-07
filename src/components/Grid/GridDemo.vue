<template>
  <!--  复制-编辑类型-->
  <div>
    <Demo :component="GridDemo"></Demo>
  </div>

</template>

<script lang='ts'>
import GridDemo from './GridCopyDemo.vue';
import Demo from '../Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {GridDemo};
  }
};
</script>

<style lang='scss' scoped>

</style>