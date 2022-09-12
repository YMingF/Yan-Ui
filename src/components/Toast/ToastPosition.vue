<demo>
设置弹出位置
</demo>
<template>
  <Button level="main" @click="showToast({position:'top'})">上方弹出</Button>
  <Button level="main" @click="showToast({position:'middle'})">中间弹出</Button>
  <Button level="main" @click="showToast({position:'bottom'})">下方弹出</Button>
</template>

<script lang='ts'>
import Button from '../../lib/Button.vue';
import {getCurrentInstance} from 'vue';

export default {
  components: {Button},
  setup() {
    const {$toast} = getCurrentInstance().appContext.config.globalProperties;

    function showToast({position}) {
      $toast({
        message: '提示信息',
        position
      });
    }

    return {
      showToast
    };
  }
};
</script>
