<demo>
常规用法
</demo>
<template>
  <div>
    <z-input v-model:value="textValue" placeholder="Basic Usage"></z-input>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue';

export default {
  setup() {
    const textValue = ref('');
    return {
      textValue
    };
  }
};
</script>

<style lang='scss' scoped>

</style>