<template>
  <div>
    <h1>Input组件示例</h1>
    <!--    普通案例-->
    <Demo :component="InputCopyDemo"/>
    <!--    密码输入框-->
    <Demo :component="InputPassword"></Demo>
    <!--    禁用输入框-->
    <Demo :component="DisableInput"></Demo>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue';
import InputCopyDemo from './BasicInputCopyDemo.vue';
import InputPassword from './passwordCopyDemo.vue';
import DisableInput from './DisableCopyDemo.vue';
import Demo from '../Demo.vue';

export default {
  components: {Demo},
  setup() {
    const textValue = ref<string>('');
    return {textValue, InputCopyDemo, InputPassword, DisableInput};
  }
};
</script>

<style lang='scss' scoped>

</style>