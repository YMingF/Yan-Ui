<demo>
设置关闭按钮
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
        closeButton: {
          text: '自己设置关闭按钮内容',
          callback: () => {
            console.log('有事启奏，无事退朝');
          }
        }
      });
    }

    return {
      showToast
    };
  }
};
</script>
