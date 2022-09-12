<demo>
支持HTML
</demo>

<template>

  <Button level="main" @click="showToast">点击弹出</Button>
</template>

<script lang='ts'>
import Button from '../../lib/Button.vue';
import {getCurrentInstance} from 'vue';

export default {
  components: {Button},
  setup() {
    const {$toast} = getCurrentInstance().appContext.config.globalProperties;

    function showToast() {
      $toast({
        message: `<p style="color: red;">一探究竟</p>`,
        enableHtml: true
      });
    }

    return {
      showToast
    };
  }
};
</script>
