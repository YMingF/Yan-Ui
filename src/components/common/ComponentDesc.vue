<template>
  <div id="desc">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
export default {};
</script>

<style lang='scss' scoped>
$border-color: #d9d9d9;
#desc {
  padding: 18px 16px 12px;
  border-top: 1px dashed $border-color;
}
</style>