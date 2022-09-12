<template>
  <Demo :component="TabsCopyDemo"></Demo>
</template>

<script lang="ts">
import Demo from '../common/Demo.vue';
import TabsCopyDemo from './TabsCopyDemo.vue';

export default {
  components: {Demo},
  setup() {
    return {TabsCopyDemo};
  },
};
</script>