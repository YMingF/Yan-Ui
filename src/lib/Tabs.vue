<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item"
           :class="{'selected':selected===t}"
           v-for="(t,index) in titles" :key="index"
           @click="select(t)">
        {{ t }}
      </div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index"
                 :class="{selected:c.props.title===selected}"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';

export default {
  props: {
    selected: {type: String},
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('当前标签不是Tab');
      }
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    // 调整当前tab选中项
    const select = (title) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, select};
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;

    &-item { // gulu-tabs-content-item
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>