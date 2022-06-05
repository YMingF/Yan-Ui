<demo>
Tabs示例
</demo>
<template>
  <div>
    <Tabs v-model:selected="currentSelected">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2222">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {Tabs, Tab},
  setup() {
    const currentSelected = ref('导航1');
    return {currentSelected};
  },
};
</script>