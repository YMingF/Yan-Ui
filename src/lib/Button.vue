<template>
  <div :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  setup(prop, context) {
    const {size, ...rest} = context.attrs; //context.attrs 获取到所有属性
    return {size, rest};
  },
};

</script>
