<demo>
密码框
</demo>
<template>
  <div>
    <z-input-password v-model:value="textValue" placeholder="password"></z-input-password>
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