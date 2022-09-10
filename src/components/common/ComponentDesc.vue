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

  :deep(code) {
    margin: 0 1px;
    padding: 0.2em 0.4em;
    font-size: .9em;
    background: #f2f4f5;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
  }
}
</style>