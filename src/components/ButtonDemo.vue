<template>
  <div>
    <Button>牛皮</Button>
    <Button theme="button">牛皮</Button>
    <Button theme="link">牛皮</Button>
    <Button theme="text">牛皮</Button>
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