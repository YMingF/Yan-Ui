<demo>
Grid栅格系统
</demo>
<template>
  <z_row>
    <z_col span="2"></z_col>
    <z_col span="22"></z_col>
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