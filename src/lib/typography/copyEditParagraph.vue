<template>
  <!--        文本内容-->
  <div v-if="!isEdit" class="typo-contentWrapper">
    <span id="content">{{ content }}</span>
    <!--    编辑图标-->
    <span v-if="editable" class="svgContainer" @click="changeEditStatus">
      <svg class="icon">
        <use xlink:href="#icon-edit"></use>
      </svg>
    </span>
    <!--    复制图标-->
    <span v-if="copyable" class="svgContainer" @click="copyContent">
      <svg class="icon">
        <use :xlink:href="copyRef"></use>
      </svg>
    </span>
  </div>
  <div v-if="isEdit" class="gulu-input-wrapper">

    <input class="gulu-input" ref="inputRef" :value="content" @blur="emitContent" @keyup.enter="emitContent"/>
    <span class="svgContainer" @click="emitContent">
      <svg class="icon">
        <use xlink:href="#icon-enter"></use>
      </svg>
    </span>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue';

export default {
  props: {
    editable: Boolean,
    copyable: Boolean,
    content: String
  },
  setup(props, context) {
    const isEdit = ref(false);
    const inputRef = ref(null);
    const copyRef = ref('#icon-copy');
    const emitContent = () => {
      const data = inputRef.value.value;
      context.emit('update:content', data);
      isEdit.value = false;
    };
    const changeEditStatus = () => {
      isEdit.value = !isEdit.value;
    };
    const copyContent = () => {
      if (copyRef.value === '#icon-success') {
        return;
      }
      copyRef.value = '#icon-success';
      setTimeout(() => {
        copyRef.value = '#icon-copy';
      }, 2000);
      const input = document.createElement('input');
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', props.content);
      document.body.appendChild(input);
      input.setSelectionRange(0, 9999);
      if (document.execCommand('copy')) {
        input.select(); // 选中输入框，才能复制
        document.execCommand('copy');
      }
      document.body.removeChild(input);
    };
    return {
      isEdit,
      changeEditStatus,
      emitContent,
      inputRef,
      copyContent,
      copyRef
    };
  }
};
</script>

<style lang='scss' scoped>
@import "src/lib/gulu";

.typo-contentWrapper {
  width: 100%;

  > .svgContainer {
    cursor: pointer;
    margin-left: 5px;
    color: $hoverColor;
  }
}

</style>