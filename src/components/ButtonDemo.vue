<template>
  <h1>theme示例</h1>
  <div>
    <Button>牛皮</Button>
    <Button theme="button">牛皮</Button>
    <Button theme="link">牛皮</Button>
    <Button theme="text">牛皮</Button>
  </div>
  <h1>size示例</h1>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <!--  link下的不同尺寸button-->
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <!--  text下的不同尺寸button-->
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  },
};
</script>