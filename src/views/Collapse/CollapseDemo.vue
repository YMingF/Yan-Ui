<template>
  <!--  基本-->
  <Demo :component="CollapseCommon"></Demo>
  <!--  一次只打开一个-->
  <Demo :component="CollapseSingle"></Demo>
</template>

<script lang='ts' setup>
import Demo from '../../components/common/Demo.vue';
import CollapseCommon from '../../components/Collapse/CollapseCommon.vue';
import CollapseSingle from '../../components/Collapse/CollapseSingle.vue';
</script>

<style lang='scss' scoped>

</style>