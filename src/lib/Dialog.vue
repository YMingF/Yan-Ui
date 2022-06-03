<template>
  <!--  遮罩层-->
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      主要内容
    </main>
    <!--    按钮-->
    <footer>
      <Button>OK</Button>
      <Button level="danger">Cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  components: {Button},
};
</script>

<style scoped>

</style>