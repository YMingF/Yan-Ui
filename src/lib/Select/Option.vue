// option.vue
<template>
  <li :class="itemSelectedClass" class="z-select-dropdown-item" @click.stop="itemSelect">{{ label }}</li>
</template>

<script lang='ts' setup>
import {computed, inject, Ref, ref} from 'vue';

const props = defineProps({
  label: String,
  value: [String, Number],
  disabled: {
    type: Boolean, default: false
  }
});
const itemSelectedClass = computed(() => {
  return {
    'is-selected': selectedItemVal.value === props.value,
    'is-disabled': props.disabled
  };
});
const {
  boxRef,
  setPopoverVisible,
  selectedItemVal,
  updateSelectedItem
} = inject('selectContainerVal') as { boxRef: Ref<HTMLElement>, setPopoverVisible: Function };
let top = ref();

function itemSelect() {
  if (props.disabled) return;
  setPopoverVisible(false);
  updateSelectedItem(props.value);
}
</script>

<style lang='scss' scoped>
.z-select-dropdown-item {
  padding: 0 32px 0 20px;
  background: #fff;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;

  &.is-selected {
    background: #f5f7fa;
    color: #409eff;
    font-weight: 700;
  }

  &.is-disabled {
    cursor: not-allowed;
    color: #a8abb2;

    &:hover {
      background: #fff;
    }
  }

  &:hover {
    background: #f5f7fa;
  }
}
</style>