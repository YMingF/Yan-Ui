<template>
  Tabs组件
</template>

<script lang='ts'>
import Tab from './Tab.vue';

export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('当前标签不是Tab');
      }
    });
    return {defaults};
  },
};
</script>

<style lang='scss' scoped>

</style>