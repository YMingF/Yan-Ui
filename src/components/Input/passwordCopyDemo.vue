<demo>
密码框
</demo>
<template>
  <div>
    <input_password v-model:value="textValue" placeholder="password"/>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue';
import InputPassword from '../../lib/input/InputPassword.vue';

export default {
  components: {
    input_password: InputPassword,
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