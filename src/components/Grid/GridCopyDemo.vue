<demo>
Grid栅格系统
</demo>
<template>
  <z_row gutter="24">
    <z_col span="12" :wide-pc="{span:8}">11</z_col>
    <z_col span="10" offset="2" :wide-pc="{span:6,offset:2}">22</z_col>
    <z_col span="10" :wide-pc="{span:8}">22</z_col>
  </z_row>
</template>

<script lang='ts'>
import z_row from '../../lib/Grid/row.vue';
import z_col from '../../lib/Grid/col.vue';

export default {
  components: {z_row, z_col},
  setup() {

  }
};
</script>

<style lang='scss' scoped>

</style>