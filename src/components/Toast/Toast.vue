<template>
  <div ref="toastRef" id="toastComponent">
    <main class="toast-message">
      <p v-if="enableHtml" v-html="message"></p>
      <p v-else>{{ message }}</p>
    </main>
    <span ref="lineRef" class="closeBtn" v-if="closeButton" @click="clickClose()">{{ closeButton.text }}</span>
  </div>
</template>

<script lang='ts'>
import {nextTick, onMounted, Ref, ref} from 'vue';

interface CloseBtn {
  text: String,
  callback?: Function
}

export default {
  props: {
    message: String,
    autoClose: {
      type: Boolean,
      default: false
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object as CloseBtn,
      default: () => ({
        text: '关闭',
        callback: () => {
          close();
        }
      })
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const toastRef = ref<HTMLElement>(null);
    const lineRef = ref<HTMLElement>(null);
    onMounted(() => {
      updateStyle(lineRef, toastRef);
    });
    execAutoClose(props.autoClose, props.autoCloseDelay, close);

    // 让toast消失
    function close() {
      toastRef.value.remove();
    }

    function clickClose() {
      close();
      props.closeButton?.callback?.(); // 调用用户自己传入的回调
    }


    return {
      toastRef,
      clickClose,
      lineRef
    };
  }
};

function updateStyle(sonRef: Ref<HTMLElement>, parentRef: Ref<HTMLElement>) {
  nextTick(() => {
    sonRef.value.style.height = parentRef.value.getBoundingClientRect().height + 'px';
  });
}

function execAutoClose(autoClose, delay, closeFunc) {
  if (autoClose) {
    setTimeout(closeFunc, delay * 1000);
  }
}
</script>

<style lang='scss' scoped>
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
#toastComponent {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0 16px;
  min-height: $toast-min-height;
  line-height: 1.8;
  background-color: $toast-bg;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);

  .toast-message {
    padding: 8px 0;
  }

  .closeBtn {
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: 16px;
    border-left: 2px solid #666;
    text-align: center;
    flex-shrink: 0;

  }
}
</style>