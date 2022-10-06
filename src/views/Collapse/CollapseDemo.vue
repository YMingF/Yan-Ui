<template>
  <!--  基本-->
  <Demo :component="CollapseCommon"></Demo>
  <!--  一次只打开一个-->
  <Demo :component="CollapseSingle"></Demo>

  <!--  API详情展示-->
  <section id="api-container">
    <h2 class="title_api">API</h2>
    <api-table :head-title="titleArr" :body-data="tableContent"></api-table>
  </section>
</template>

<script lang='ts' setup>
import Demo from '../../components/common/Demo.vue';
import CollapseCommon from '../../components/Collapse/CollapseCommon.vue';
import CollapseSingle from '../../components/Collapse/CollapseSingle.vue';
import ApiTable from '../../components/common/ApiTableContainer.vue';
const titleArr = ['参数', '说明', '类型', '默认值'];
const tableContent = [
  ['accordion', `一次是否只打开一个`, 'boolean', `<code>false</code>`
  ],
  [`activeKey`, `当前激活 tab 面板的 key`, `array`, `<code>[]</code>`]
];
</script>

<style lang='scss' scoped>

</style>