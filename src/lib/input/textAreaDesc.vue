<template>
  <div class="desc">
    <p>属性适用于 <code>textarea </code>节点，并且只有高度会自动变化。另外 <code>autoSize</code> 可以设定为一个对象，指定最小行数和最大行数。</p>
  </div>
</template>

<script lang='ts'>
export default {};
</script>

<style lang='scss' scoped>
$border-color: #d9d9d9;
.desc {
  padding: 18px 16px 12px;
  border-top: 1px dashed $border-color;

  > p > code {
    margin: 0 1px;
    padding: 0.2em 0.4em;
    font-size: .9em;
    background: #f2f4f5;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
  }
}
</style>