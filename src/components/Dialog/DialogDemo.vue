<template>
  <Demo :component="DialogCopyDemo"></Demo>
</template>

<script lang="ts">
import Demo from '../common/Demo.vue';
import DialogCopyDemo from './DialogCopyDemo.vue';

export default {
  components: {Demo},
  setup() {
    return {DialogCopyDemo};
  },
};
</script>