<demo>
Dialog示例
</demo>
<template>
  <div>
    <Dialog title="标题" v-model:visible="visible" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <span>主要内容</span>
      </template>
    </Dialog>
    <Button @click="showDialog">展示对话框</Button>

  </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const visible = ref(false);

    const showDialog = () => {
      visible.value = true;
    };
    return {visible, showDialog};
  },
};
</script>