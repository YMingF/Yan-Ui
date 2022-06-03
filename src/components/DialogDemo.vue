<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog :visible="x"></Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    return {x, toggle};
  },
};
</script>