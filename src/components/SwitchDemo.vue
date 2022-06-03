<template>
  <div>
    <Switch :value="status" @changeStatus="status=$event"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const status = ref(true);
    return {status};
  },
};
</script>