<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {computed, provide} from 'vue';

export default {
  props: {
    gutter: [Number, String],
    align: {
      type: String,
      validator(value) {
        return (['left', 'right', 'center'].indexOf(value) !== -1);
      }
    }
  },
  setup(props) {
    provide('gutter', props.gutter);
    const rowStyle = computed(() => {
      return {
        marginLeft: -props.gutter / 2 + 'px',
        marginRight: -props.gutter / 2 + 'px'
      };
    });
    const rowClass = computed(() => {
      return {
        [`align-${props.align}`]: props.align
      };
    });
    return {
      rowStyle,
      rowClass
    };
  }
};
</script>

<style lang='scss' scoped>
.row {
  display: flex;
  flex-wrap: wrap;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &.align-center {
    justify-content: center;
  }
}
</style>