<demo>
区块间隔
</demo>
<template>
  <z_row gutter="16">
    <z_col class="gutter-row" span="6">
      <div class="gutter-box">col-6</div>
    </z_col>
    <z_col class="gutter-row" span="6">
      <div class="gutter-box">col-6</div>
    </z_col>
    <z_col class="gutter-row" span="6">
      <div class="gutter-box">col-6</div>
    </z_col>
    <z_col class="gutter-row" span="6">
      <div class="gutter-box">col-6</div>
    </z_col>
  </z_row>
</template>

<script lang='ts'>
import z_row from '../../../lib/Grid/row.vue';
import z_col from '../../../lib/Grid/col.vue';

export default {
  components: {z_row, z_col},
  setup() {

  }
};
</script>
