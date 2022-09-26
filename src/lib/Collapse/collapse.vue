<template>
  <div id="z-collapse">
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>
import {defineProps, onMounted} from 'vue';
import Mitt from '../../store/mitt.js';

const props = defineProps({
  activeKey: Number
});
const emits = defineEmits(['update:activeKey']);
onMounted(() => {
  Mitt.emit('changeCollapseKey', props.activeKey);
  Mitt.on('changeCollapseKey', (val) => {
    emits('update:activeKey', val);
  });
});
</script>

<style lang='scss' scoped>
$border-radius: 2px;
#z-collapse {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 2px;
}
</style>