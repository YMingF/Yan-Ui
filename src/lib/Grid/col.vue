<template>
  <div class="col" :class="classes" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {computed, inject, ref} from 'vue';
const validator = (val) => {
  const keys = Object.keys(val);
  let valid = true;
  // 此处遍历目的在于确保输入属性不能为span或offset的其它项
  keys.forEach(item => {
    if (['span', 'offset'].indexOf(item) === -1) {
      valid = false;
    }
  });
  return valid;
};

export default {
  props: {
    span: [Number, String],
    offset: {type: [Number, String]},
    ipad: {type: Object, validator},
    narrowPc: {type: Object, validator},
    pc: {type: Object, validator},
    widePc: {type: Object, validator}
  },
  setup(props) {
    const gutter = ref(0);
    gutter.value = inject('gutter');
    const classes = computed(() => {
      const {span, offset, ipad, narrowPc, pc, widePc} = props;
      return {
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrowPc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'widePc-')
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

function createClasses(obj, str = '') {
  if (!obj) {
    return {};
  }
  return {[`col-${str}${obj?.span}`]: obj?.span, [`offset-${str}${obj?.offset}`]: obj?.offset};
}
</script>

<style lang='scss' scoped>
.col {
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
  $arrColor: (
      ("minWidth":576px, "label":'ipad'),
      ("minWidth":769px, "label":'narrow-pc'),
      ("minWidth":993px, "label":'pc'),
      ("minWidth":1200px, "label":'widePc'),
  );
  @each $item in $arrColor {
    @media (min-width: #{map-get($item,'minWidth')}) {
      $class-prefix: col-#{map-get($item,'label')}-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n/24)*100%;
        }
      }
      $class-prefix: offset-#{map-get($item,'label')}-;
      @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n/24)*100%;
        }
      }
    }
  }
}
</style>