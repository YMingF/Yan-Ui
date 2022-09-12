<demo>
按钮的level
</demo>
<template>
  <!--  普通按钮-->
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <!--  链接主题按钮-->
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <!--  文字主题按钮-->
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
</template>

<script lang='ts'>
import Button from '../../lib/Button.vue';

export default {
  components: {Button},
};
</script>
