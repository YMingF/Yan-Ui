<template>
  <div>
    <!--  Theme示例-->
    <Demo :component="ButtonDemoTheme"></Demo>
  </div>
  <div>
    <!-- size示例 -->
    <Demo :component="ButtonDemoSize"></Demo>
  </div>
  <!--  level示例-->
  <div>
    <Demo :component="ButtonDemoLevel"></Demo>
  </div>
  <!--  按钮置灰-->
  <div>
    <Demo :component="ButtonDemoDisabled"></Demo>
  </div>

  <!--  loading-->
  <div>
    <Demo :component="ButtonDemoLoading"></Demo>
  </div>
  <!--  API详情展示-->
  <api-table index-title="API" :head-title="titleArr" :body-data="tableContent"></api-table>
</template>
<script lang="ts" setup>
import Demo from '../../components/common/Demo.vue';
import ButtonDemoTheme from '../../components/Button/ButtonDemoTheme.vue';
import ButtonDemoSize from '../../components/Button/ButtonDemoSize.vue';
import ButtonDemoLevel from '../../components/Button/ButtonDemoLevel.vue';
import ButtonDemoDisabled from '../../components/Button/ButtonDemoDisabled.vue';
import ButtonDemoLoading from '../../components/Button/ButtonDemoLoading.vue';
import ApiTable from '../../components/common/ApiTableContainer.vue';

const titleArr = ['参数', '说明', '类型', '默认值'];
const tableContent = [
  ['theme', `按钮类型`, 'string', `<code>button</code>`
  ],
  [`size`,
    `按钮尺寸`,
    `string`,
    `<code>normal</code>`],
  [`level`, `按钮样式`, `string`, `<code>normal</code>`],
  [`disabled`, `按钮禁用`, `boolean`, `<code>false</code>`],
  [`loading`, `按钮加载`, `boolean`, `<code>false</code>`],
];
</script>