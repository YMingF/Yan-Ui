<demo>
复制-编辑文本功能
</demo>
<template>
  <Typography v-model:content="editContent" editable></Typography>
  <div style="margin: 24px 0"/>
  <Typography v-model:content="copyContent" copyable></Typography>
</template>

<script lang='ts'>
import Typography from '../../lib/typography/copyEditParagraph.vue';
import {ref} from 'vue';

export default {
  components: {Typography},
  setup() {
    return {
      editContent: ref('这是个可编辑文本.'),
      copyContent: ref('这是可复制的内容.')

    };
  }
};
</script>

<style lang='scss' scoped>

</style>