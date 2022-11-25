<template>
  <div class="z-carousel" ref="rootRef" @mouseover="showArrow" @mouseleave="hideArrow">
    <div class="z-carousel-container">
      <!--    左右两边的按钮-->
      <transition name="leftArrow">
        <button v-show="isArrowShow" class="z-carousel-arrow z-carousel-arrow-left">
          <svg class="icon">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </button>
      </transition>
      <transition name="rightArrow">
        <button v-show="isArrowShow" class="z-carousel-arrow z-carousel-arrow-right">
          <svg class="icon">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </button>
      </transition>
      <!--      滚动条-->
      <slot></slot>
    </div>
    <!--    下方定位条-->
    <ul class="z-carousel-indicator"></ul>
  </div>
</template>

<script lang='ts' setup>
import {onMounted, provide, ref, useSlots} from 'vue';
import CarouselItem from './CarouselItem.vue';

const rootRef = ref<HTMLDivElement>();
const activeKey = ref(1);
const carouselItem = ref({});
let slots;
const props = defineProps({
  'indicatorPosition': {type: String, values: ['outside', 'inside']},
  'arrow': {type: String, values: ['always', 'never']},
  'direction': {type: String, values: ['horizontal', 'vertical'], 'default': 'horizontal'}
});

const isArrowShow = ref(false);

function showArrow() {
  isArrowShow.value = true;
}

function hideArrow() {
  isArrowShow.value = false;
}

function useDefaultSlots() {
  slots = ref<Array<CarouselItem>>((useSlots().default?.().filter(compo => compo.type === CarouselItem) ?? []));
  if (slots.value.length === 0) {
    useSlots().default?.().forEach(item => {
      const res = (item['children'] as Array<CarouselItem>).filter(compo => compo.type === CarouselItem);
      slots.value = slots.value.concat(res);
    });
  }
}

useDefaultSlots();
provide('carouselBox', {
  rootRef,
  isVertical: props.direction === 'vertical',
  activeKey,
  carouselItem
});

function startTimer() {
  setInterval(() => {
    if (activeKey.value < slots.value.length) {
      activeKey.value += 1;
    } else {
      activeKey.value = 1;
    }
    // eslint-disable-next-line no-magic-numbers
  }, 2000);
}

onMounted(() => {
  startTimer();
});
</script>

<style lang='scss' scoped>
.z-carousel {
  overflow-x: hidden;
  position: relative;

  .z-carousel-container {
    height: 150px;

    .z-carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      outline: none;
      background-color: rgba(31, 45, 61, .11);
      cursor: pointer;
      text-align: center;
      z-index: 2;
      font-size: 16px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: #fff;

      &:hover {
        background-color: #a9b3bf;
      }

      svg {
        fill: currentColor;
        color: inherit;
      }

      &.z-carousel-arrow-left {
        left: 16px;
      }

      &.z-carousel-arrow-right {
        right: 16px;
      }

      &.leftArrow-enter-from {
        left: 0;
      }

      &.leftArrow-enter-to {
        left: 16px;
      }

      &.leftArrow-leave-from {
        left: 16px;
        opacity: 1;
      }

      &.leftArrow-leave-to {
        left: 0;
        opacity: 0;

      }

      &.rightArrow-enter-from {
        right: 0;
      }

      &.rightArrow-enter-to {
        right: 16px;
      }

      &.rightArrow-leave-from {
        right: 16px;
        opacity: 1;
      }

      &.rightArrow-leave-to {
        right: 0;
        opacity: 0;
      }
    }

    .leftArrow-enter-active,
    .leftArrow-leave-active, .rightArrow-enter-active,
    .rightArrow-leave-active {
      transition: all 0.25s linear;
    }

  }

}


</style>
