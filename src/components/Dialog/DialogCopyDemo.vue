<demo>
Dialog示例
</demo>
<template>
  <div>
    <z-dialog title="标题" v-model:visible="visible" :closeOnClickOverlay="true">
      <template v-slot:content>
        <span>主要内容</span>
      </template>
    </z-dialog>
    <z-button @click="showDialog">展示对话框</z-button>

  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const visible = ref(false);

const showDialog = () => {
  visible.value = true;
};

</script>