<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
      <!--      内容-->
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <!--      标题-->
      <template v-slot:title>
        <strong>加粗标题</strong>
      </template>
    </Dialog>
    <h2>示例2</h2>
    <Button @click="showDialog">showDialog</Button>

  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog.ts';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
    };
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '这是一个内容',
        ok: () => {
          console.log('ok');
        },
        cancel: () => {
          console.log('cancel');
        },
      });
    };
    return {x, toggle, f1, f2, showDialog};
  },
};
</script>