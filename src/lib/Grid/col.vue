<template>
  <div class="col" :class="classes" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {computed, inject, ref} from 'vue';

export default {
  props: {
    span: [Number, String],
    offset: {type: [Number, String]}
  },
  setup(props) {
    const gutter = ref(0);
    gutter.value = inject('gutter');
    const classes = computed(() => {
      return {
        [`col-${props.span}`]: props.span,
        [`offset-${props.offset}`]: props.offset
      };
    });
    const colStyle = computed(() => {
      return {
        paddingLeft: gutter.value / 2 + 'px',
        paddingRight: gutter.value / 2 + 'px'
      };
    });
    return {
      classes,
      gutter,
      colStyle
    };
  }
};
</script>

<style lang='scss' scoped>
.col {
  width: 50%;
  height: 100px;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }
}
</style>