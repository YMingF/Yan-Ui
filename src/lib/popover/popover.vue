<template>
  <div id="popover" @click="changeStatus">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
     <slot></slot>
    </span>
  </div>
</template>

<script lang='ts' setup>
import {nextTick, ref} from 'vue';

const visible = ref(false);
const triggerWrapper = ref<HTMLElement>(null);
const contentWrapper = ref<HTMLElement>(null);

function changeStatus(event) {
  if (triggerWrapper.value.contains(event.target)) {
    if (visible.value) {
      close();
    } else {
      showContent();
    }
  }
}

function showContent() {
  visible.value = true;
  nextTick(() => {
    positionContent();
    document.addEventListener('click', onclickDoc);
  });
}

// 主要功能内聚到一起
function close() {
  visible.value = false;
  document.removeEventListener('click', onclickDoc);
}

function onclickDoc(e) {
  if (!(triggerWrapper.value === e.target || contentWrapper.value === e.target || triggerWrapper.value?.contains(e.target) || contentWrapper.value?.contains(e.target))) {
    close();
  }
}

function positionContent() {
  document.body.appendChild(contentWrapper.value);
  let {top, left} = triggerWrapper.value.getBoundingClientRect();
  // window.scrollX和window.scrollY加到这里是为了在出现滚动条的情况下，弹框也能准确出现在按钮上方
  contentWrapper.value.style.left = `${left + window.scrollX}px`;
  contentWrapper.value.style.top = `${top + window.scrollY}px`;
}

</script>

<style lang='scss' scoped>
#popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  left: 0;
  border: 1px solid red;
}
</style>