<demo>
size示例
</demo>
<template>
  <!--  普通theme下的size-->
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <!--  link下的不同尺寸button-->
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <!--  text下的不同尺寸button-->
  <div>
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue';

export default {
  components: {Button},

};
</script>
