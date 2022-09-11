<demo>
列偏移
</demo>
<template>
  <z_row>
    <z_col :span="8">col-8</z_col>
    <z_col :span="8" offset="8">col-8</z_col>
  </z_row>

  <z_row>
    <z_col :span="6" offset="6">col-6-offset-6</z_col>
    <z_col :span="6" offset="6">col-6-offset-6</z_col>
  </z_row>

  <z_row>
    <z_col :span="12" offset="6">col-12-offset-6</z_col>
  </z_row>
</template>

<script lang='ts'>
import z_row from '../../../lib/Grid/row.vue';
import z_col from '../../../lib/Grid/col.vue';

export default {
  components: {z_row, z_col}
};
</script>