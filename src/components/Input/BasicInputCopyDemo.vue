<demo>
常规用法
</demo>
<template>
  <div>
    <Input v-model:value="textValue" placeholder="Basic Usage"/>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue';
import Input from '../../lib/input/Input.vue';

export default {
  components: {
    Input
  },
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