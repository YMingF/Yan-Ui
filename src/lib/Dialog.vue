<template>
  <!--  visible来控制dialog对话框是否展示-->
  <template v-if="visible">
    <Teleport to="body">
      <!--  遮罩层-->
      <div class="gulu-dialog-overlay" @click="clickOverlay"></div>
      <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
          <header>
            <slot name="title"/>
            <span @click="close" class="gulu-dialog-close"></span></header>
          <!--  dialog主要内容-->
          <main>
            <slot name="content"/>
          </main>
          <!--    按钮-->
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  props: {
    visible: {type: Boolean, default: false},
    closeOnClickOverlay: {type: Boolean, default: false}, // 表是否可通过点击遮罩层关闭dialog
    ok: {type: Function},
    cancel: {type: Function},
  },
  components: {Button},
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const clickOverlay = () => {
      console.log(props.closeOnClickOverlay);
      // 当你设置了可以通过点击遮罩层关闭的时候，才调用close函数关闭dialog
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      // 这样写的目的是为了面对以后有校验时，只有当校验返回结果不为false 的时候，才关闭dialog
      if (props.ok?.() !== false) {
        close();
      }
    };
    const cancel = () => {
      props.cancel?.();
      close();
    };
    return {close, clickOverlay, ok, cancel};
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>