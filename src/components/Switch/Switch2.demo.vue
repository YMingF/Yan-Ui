<demo>
支持 disabled
</demo>
<template>
  <z-switch v-model:value="bool" disabled></z-switch>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const bool = ref(false);
</script>
