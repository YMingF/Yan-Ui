<template>
  <div ref="selectRef" class="z-select" :class="selectSizeClass" v-click-outside="handleClose"
       @click.stop="selectBoxClicked">
    <div class="z-input">
      <div class="z-input-wrapper" :class="{'is-focus':isFocus}">
        <input class="z-input-inner" type="text" :value="modelValue" readonly autocomplete="off"
               :placeholder="placeholder">
        <span class="z-input-suffix-box" :class="{'is-expand':popoverVisible}">
          <template v-if="showClearBtn">
           <svg @click.stop="resetVal">
            <use xlink:href="#icon-closefill"></use>
          </svg>
          </template>
          <template v-else>
             <svg class="arrowSvg">
            <use xlink:href="#icon-arrow-down"></use>
          </svg>
          </template>
        </span>
      </div>
    </div>
    <!--  下拉弹窗  -->
    <transition name="fade">
      <div ref="popoverBoxRef" class="z-select-popover" :class="popoverComputedClass" v-if="popoverVisible">
        <div class="contentBox">
          <div class="z-select-item-wrapper">
            <ul>
              <slot></slot>
            </ul>
          </div>
          <span class="z-select-dropdown-arrow"></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang='ts' setup>
import {computed, nextTick, provide, ref, watch} from 'vue';

const props = defineProps({
  modelValue: [String, Number],
  placeholder: {type: String, default: 'Select'},
  size: String,
  clearable: {type: Boolean, default: false}
});
const emits = defineEmits(['update:modelValue']);
const isFocus = ref(false);
const selectedItemVal = ref(props.modelValue ?? '');
const selectRef = ref<HTMLDivElement>();

const selectSizeClass = computed(() => {
  return {
    [`z-select-${props.size}`]: props.size
  };
});
const showClearBtn = computed(() => {
  if (!props.clearable) return;
  const val = props.modelValue ?? '';
  return typeof val === 'string' ? val.length !== 0 : String(val).length !== 0;
});

function selectBoxClicked() {
  isFocus.value = true;
  popoverVisible.value = !popoverVisible.value;
  resetPopoverPos();
  changePopoverPos();
}

function usePopover() {
  const popoverVisible = ref(false);
  const popoverPos = ref('bottom');
  const popoverComputedClass = computed(() => {
    return {
      [`pos-${popoverPos.value}`]: popoverPos.value
    };
  });
  const popoverBoxRef = ref<HTMLDivElement>();

  function changePopoverPos() {
    if (popoverVisible.value) {
      nextTick(() => {
        const gap = document.documentElement.clientHeight - popoverBoxRef.value.getBoundingClientRect().y - popoverBoxRef.value.getBoundingClientRect().height;
        if (gap < 10) {
          popoverPos.value = 'top';
        } else {
          popoverPos.value = 'bottom';
        }
      });

    }
  }

  function resetPopoverPos() {
    if (!popoverVisible.value) {
      popoverPos.value = undefined;
    }
  }

  return {
    popoverVisible, changePopoverPos, popoverPos, popoverBoxRef, popoverComputedClass, resetPopoverPos
  };
}

const {changePopoverPos, popoverVisible, popoverBoxRef, popoverComputedClass, resetPopoverPos} = usePopover();

function handleClose() {
  isFocus.value = false;
  popoverVisible.value = false;
  resetPopoverPos();
}

function resetVal() {
  emits('update:modelValue', undefined);
  selectedItemVal.value = undefined;
  popoverVisible.value = false;
}

watch(() => selectedItemVal.value, () => {
  emits('update:modelValue', selectedItemVal.value);
});
const boxRef = ref<HTMLElement>();
provide('selectContainerVal', {
  boxRef,
  popoverVisible,
  selectedItemVal
});
</script>

<style lang='scss' scoped>
$el-input-height: 32px;
$el-input-large-height: 40px;
$el-input-small-height: 24px;
.z-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  line-height: $el-input-height;

  &.z-select-large {
    .z-input-wrapper {
      height: $el-input-large-height;
      line-height: $el-input-large-height;
      font-size: 16px;

      .z-input-inner {
        height: $el-input-large-height - 2px;
        line-height: $el-input-large-height - 2px;
      }
    }
  }

  &.z-select-small {
    .z-input-wrapper {
      height: $el-input-small-height;
      line-height: $el-input-small-height;
      font-size: 12px;

      .z-input-inner {
        height: $el-input-small-height - 2px;
        line-height: $el-input-small-height - 2px;
      }
    }
  }

  .z-input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 15px;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    font-size: 14px;
    height: $el-input-height;
    line-height: $el-input-height;

    &.is-focus {
      box-shadow: 0 0 0 1px #409eff inset;
    }

    .z-input-inner {
      width: 100%;
      color: #606266;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: inherit;
      padding: 0;
      background: none;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      height: $el-input-height - 2px;
      line-height: $el-input-height - 2px;;
    }

    .z-input-suffix-box {
      height: 100%;
      display: flex;
      align-items: center;

      svg {
        width: 16px;
        height: 16px;
        transition: all 0.3s ease;
        fill: #b3b6bc
      }

      &.is-expand {
        .arrowSvg {
          transform: rotate(-180deg);
        }
      }
    }
  }

  .z-select-popover {
    position: absolute;
    width: 100%;
    box-shadow: 0 0 1px #606266 inset;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    z-index: 99;

    &.pos-bottom {
      top: calc(100% + 10px);

      .contentBox {
        .z-select-dropdown-arrow {
          box-shadow: -1px -1px 0 #e4e7ed;
          top: 0;
        }
      }
    }

    &.pos-top {
      bottom: calc(100% + 10px);

      .contentBox {
        .z-select-dropdown-arrow {
          box-shadow: 1px 1px 0 #e4e7ed;
          top: 100%;
          border-color: transparent white white transparent;
        }
      }
    }

    .contentBox {
      position: relative;

      .z-select-dropdown-arrow {
        position: absolute;
        display: inline-block;
        width: 0;
        height: 0;
        border: 5px solid;
        border-color: white transparent transparent white;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }

}
</style>

