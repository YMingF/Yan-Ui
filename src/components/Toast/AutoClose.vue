<demo>
设置弹窗是否自动关闭
</demo>

<template>
  <Button level="main" @click="showToast">自动关闭</Button>
  <Button level="main" @click="showToast({autoClose:false})">不自动关闭</Button>
</template>

<script lang='ts'>
import Button from '../../lib/Button.vue';
import {getCurrentInstance} from 'vue';

export default {
  components: {Button},
  setup() {
    const {$toast} = getCurrentInstance().appContext.config.globalProperties;

    function showToast({autoClose}) {
      $toast({
        message: '提示信息',
        autoClose
      });
    }

    return {
      showToast
    };
  }
};
</script>
