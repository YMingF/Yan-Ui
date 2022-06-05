<template>
  <Demo :component="TabsCopyDemo"></Demo>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import TabsCopyDemo from '../components/TabsCopyDemo.vue';

export default {
  components: {Demo},
  setup() {
    return {TabsCopyDemo};
  },
};
</script>