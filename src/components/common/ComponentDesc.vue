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
    padding: 0.065em 0.4em;
    margin: 0 1px;
    color: #ff502c;
    font-size: .87em;
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    font-weight: 500;
    background-color: #fff5f5;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
  }
}
</style>