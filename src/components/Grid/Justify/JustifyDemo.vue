<demo>
子元素横向对齐
</demo>
<template>
  <p>element align left</p>
  <z_row class="justifyRow" justify="start">
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
  </z_row>

  <p>element align center</p>
  <z_row class="justifyRow" justify="center">
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
  </z_row>

  <p>element align right</p>
  <z_row class="justifyRow" justify="end">
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
  </z_row>

  <p>element align space-between</p>
  <z_row class="justifyRow" justify="space-between">
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
  </z_row>

  <p>element align space-around</p>
  <z_row class="justifyRow" justify="space-around">
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
    <z_col span="4" class="justify-box">col-4</z_col>
  </z_row>
</template>

<script lang='ts'>
import z_row from '../../../lib/Grid/row.vue';
import z_col from '../../../lib/Grid/col.vue';

export default {
  components: {z_row, z_col}
};
</script>
