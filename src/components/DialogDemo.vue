<template>
  <Demo :component="DialogCopyDemo"></Demo>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import DialogCopyDemo from '../components/DialogCopyDemo.vue';

export default {
  components: {Demo},
  setup() {
    return {DialogCopyDemo};
  },
};
</script>