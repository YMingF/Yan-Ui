<demo>
popover的东西
</demo>
<template>
  <popover>
    <template #content>
      这是个简单的弹出内容
    </template>
    <!--    -->
    <button>点击我试一下</button>
  </popover>
</template>

<script lang='ts'>
import popover from '../../lib/popover/popover.vue';

export default {
  components: {popover}
};
</script>

<style lang='scss' scoped>

</style>