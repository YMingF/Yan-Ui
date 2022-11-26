<template>
  <div class="z-carousel" ref="rootRef" @mouseover="showArrow" @mouseleave="hideArrow">
    <div class="z-carousel-container">
      <!--    左右两边的按钮-->
      <transition name="leftArrow">
        <button v-show="isArrowShow" class="z-carousel-arrow z-carousel-arrow-left" @click="prev">
          <svg class="icon">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </button>
      </transition>
      <transition name="rightArrow">
        <button v-show="isArrowShow" class="z-carousel-arrow z-carousel-arrow-right" @click="next">
          <svg class="icon">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </button>
      </transition>
      <!--      滚动条-->
      <slot></slot>
    </div>
    <!--    下方定位条-->
    <ul class="z-carousel-indicators" :class="directionComputed">
      <li class="z-carousel-indicator" v-for="(item,index) in slots"
          @click="handleIndicator(index+1)" @mouseover="hoverIndicator(index+1)">
        <button :class="{'is-active':activeKey===index+1}"></button>
      </li>
    </ul>
  </div>
</template>

<script lang='ts' setup>
import {computed, onMounted, provide, ref, useSlots} from 'vue';
import CarouselItem from './CarouselItem.vue';

const rootRef = ref<HTMLDivElement>();
const activeKey = ref(1);
const carouselItem = ref({});
let intervalId;
let slots;
const props = defineProps({
  'indicatorPosition': {type: String, values: ['outside', 'inside']},
  'arrow': {type: String, values: ['always', 'never']},
  'direction': {type: String, values: ['horizontal', 'vertical'], 'default': 'horizontal'},
  'trigger': {type: String, values: ['hover', 'click'], 'default': 'hover'}
});
const directionComputed = computed(() => {
  return {
    [`z-carousel-indicators-${props.direction}`]: props.direction
  };
});

function useArrowDisplay() {
  const isArrowShow = ref(false);

  function showArrow() {
    isArrowShow.value = true;
    clearTimer();
  }

  function hideArrow() {
    isArrowShow.value = false;
    startTimer();
  }

  function prev() {
    activeKey.value -= 1;
    if (activeKey.value <= 0) {
      activeKey.value = slots.value.length;
    }
  }

  function next() {
    activeKey.value += 1;
    if (activeKey.value > slots.value.length) {
      activeKey.value = 1;
    }
  }

  return {isArrowShow, showArrow, hideArrow, prev, next};
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

function clearTimer() {
  clearInterval(intervalId);
}

function handleIndicator(index) {
  if (props.trigger === 'hover') return;
  activeKey.value = index;
}

function hoverIndicator(index) {
  if (props.trigger === 'click') return;
  setTimeout(() => {
    activeKey.value = index;

  }, 200);

}

provide('carouselBox', {
  rootRef,
  isVertical: props.direction === 'vertical',
  activeKey,
  carouselItem,
  slotLength: slots.value.length
});

function startTimer() {
  intervalId = setInterval(() => {
    if (activeKey.value < slots.value.length) {
      activeKey.value += 1;
    } else {
      activeKey.value = 1;
    }
    // eslint-disable-next-line no-magic-numbers
  }, 2000);
}

const {isArrowShow, showArrow, hideArrow, prev, next} = useArrowDisplay();

onMounted(() => {
  startTimer();
});
</script>

<style lang='scss' scoped>
.z-carousel {
  overflow: hidden;
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


  .z-carousel-indicators {
    position: absolute;
    transform: translate(-50%);
    z-index: 2;
    display: flex;
    list-style: none;
    cursor: pointer;

    &.z-carousel-indicators-horizontal {
      left: 50%;
      bottom: 0;
    }

    &.z-carousel-indicators-vertical {
      top: 50%;
      right: 0;
    }

    .z-carousel-indicator {
      display: inline-block;
      list-style: none;
      padding: 10px 4px;
      margin-right: 2px;
      cursor: pointer;

      button {
        height: 2px;
        width: 30px;
        outline: none;
        border: none;
        margin: 0;
        padding: 0;
        border-radius: 10px;
        background-color: #cad2de;
        cursor: pointer;

        &:hover {
          background-color: #f3f5f8;
        }

        &.is-active {
          background-color: #fff;
        }
      }


    }
  }

}


</style>
