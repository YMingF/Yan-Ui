<demo>
设置自动关闭时长
</demo>

<template>
  <Button level="main" @click="showToast">上方弹出</Button>
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
        message: '提示信息',
        autoCloseDelay: 10
      });
    }

    return {
      showToast
    };
  }
};
</script>
