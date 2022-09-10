<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {computed, provide} from 'vue';

export default {
  props: {
    gutter: [Number, String]
  },
  setup(props) {
    provide('gutter', props.gutter);
    const rowStyle = computed(() => {
      return {
        marginLeft: -props.gutter / 2 + 'px',
        marginRight: -props.gutter / 2 + 'px'
      };
    });
    return {
      rowStyle
    };
  }
};
</script>

<style lang='scss' scoped>
.row{
  display: flex;
}
</style>