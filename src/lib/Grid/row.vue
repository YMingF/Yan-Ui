<template>
  <div class="z_row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {computed, provide} from 'vue';

export default {
  props: {
    gutter: [Number, String],
    justify: {
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
        [`justify-${props.justify}`]: props.justify
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
.z_row {
  display: flex;
  flex-wrap: wrap;

  &.justify-start {
    justify-content: flex-start;
  }

  &.justify-end {
    justify-content: flex-end;
  }

  &.justify-center {
    justify-content: center;
  }

  &.justify-space-between {
    justify-content: space-between;
  }

  &.justify-space-around {
    justify-content: space-around;
  }
}
</style>