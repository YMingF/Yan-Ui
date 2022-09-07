<template>
  <div class="col" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {computed} from 'vue';

export default {
  props: {
    span: [Number, String],
    offset: {type: [Number, String]}
  },
  setup(props) {
    const classes = computed(() => {
      return {
        [`col-${props.span}`]: props.span,
        [`offset-${props.offset}`]: props.offset
      };
    });
    return {
      classes
    };
  }
};
</script>

<style lang='scss' scoped>
.col {
  width: 50%;
  height: 100px;
  border: 1px solid red;
  background-color: gray;

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