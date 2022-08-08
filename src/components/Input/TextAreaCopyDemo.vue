<demo>
自适应多文本框
</demo>
<template>
  <div>
    <a_textArea auto-size placeholder="根据内容行数自适应高度"/>
    <div style="margin: 24px 0"/>
    <a_textArea :auto-size="{minRow:2,maxRow:5}" placeholder="根据内容行数自适应高度"/>
  </div>
</template>

<script lang='ts'>
import a_textArea from '../../lib/input/textArea.vue';

export default {
  components: {a_textArea}
};
</script>

<style lang='scss' scoped>

</style>