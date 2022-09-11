<demo>
子元素垂直对齐
</demo>
<template>

  <p>Align Top</p>
  <z_row justify="center" align="top">
    <z_col :span="4">
      <p class="height-100">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-50">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-120">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-80">col-4</p>
    </z_col>
  </z_row>

  <p>Align Center</p>
  <z_row justify="space-around" align="middle">
    <z_col :span="4">
      <p class="height-100">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-50">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-120">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-80">col-4</p>
    </z_col>
  </z_row>

  <p>Align Bottom</p>
  <z_row justify="space-around" align="bottom">
    <z_col :span="4">
      <p class="height-100">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-50">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-120">col-4</p>
    </z_col>
    <z_col :span="4">
      <p class="height-80">col-4</p>
    </z_col>
  </z_row>
</template>

<script lang='ts'>
import z_row from '../../../lib/Grid/row.vue';
import z_col from '../../../lib/Grid/col.vue';

export default {
  components: {z_row, z_col}
};
</script>
