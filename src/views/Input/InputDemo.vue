<template>
  <div>
    <!--    普通案例-->
    <Demo :component="InputCopyDemo"/>
    <!--    密码输入框-->
    <Demo :component="InputPassword"></Demo>
    <!--    禁用输入框-->
    <Demo :component="DisableInput"></Demo>
    <!--    自适应多行文本-->
    <Demo :component="TextAreaInput" :desc-component="textareaDesc"/>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue';
import InputCopyDemo from '../../components/Input/BasicInputCopyDemo.vue';
import InputPassword from '../../components/Input/PasswordCopyDemo.vue';
import DisableInput from '../../components/Input/DisableCopyDemo.vue';
import TextAreaInput from '../../components/Input/TextAreaCopyDemo.vue';
import textareaDesc from '../../lib/input/textAreaDesc.vue';
import Demo from '../../components/common/Demo.vue';

export default {
  components: {Demo},
  setup() {
    const textValue = ref<string>('');
    return {textValue, InputCopyDemo, InputPassword, DisableInput, TextAreaInput,textareaDesc};
  }
};
</script>

<style lang='scss' scoped>

</style>