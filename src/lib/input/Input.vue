<template>
  <div>
    <input class="gulu-input" :class="{'gulu-input-disabled':disabled}" type="password" :value="value"
           :placeholder="placeholder" @input="inputDebounce"
           :disabled="disabled"/>
  </div>
</template>

<script lang='ts'>

export default {
  props: {
    value: String,
    placeholder: {type: String, default: '请输入'},
    disabled: {type: Boolean, default: false}
  },
  setup(props, context) {
    const inputDebounce = (e) => {
      context.emit('update:value', e.currentTarget.value);
    };
    return {inputDebounce};
  }
};
</script>

<style lang="scss">
.gulu-input-disabled {
  cursor: not-allowed;

  &::-webkit-input-placeholder {
    color: rgb(217, 217, 217)
  }

  &:hover {
    border-color: rgb(217, 217, 217);
  }

}
</style>