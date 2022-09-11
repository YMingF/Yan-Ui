<template>
  <section id="main-container">
    <!--  区间间隔Gutter-->
    <div>
      <Demo :component="GutterDemo" :desc-component="GutterDesc"></Demo>
    </div>
    <!-- 纵向排版-->
    <div>
      <Demo :component="AlignDemo" :desc-component="AlignDesc"></Demo>
    </div>

    <!-- 横向排版-->
    <div>
      <Demo :component="JustifyDemo" :desc-component="JustifyDesc"></Demo>
    </div>

    <!-- 列偏移-->
    <div>
      <Demo :component="OffsetDemo" :desc-component="OffsetDesc"></Demo>
    </div>

    <!-- 响应式布局-->
    <div>
      <Demo :component="ResponsiveDemo" :desc-component="ResponsiveDesc"></Demo>
    </div>
  </section>
  <!--  API详情展示-->
  <section id="api-container">
    <h2 class="title_api">API</h2>
    <h3 class="title_row">Row</h3>
    <table class="rowTable">
      <thead>
      <tr>
        <th>成员</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      </thead>

      <tbody>
      <!--      align-->
      <tr>
        <td>align</td>
        <td>flex 布局下的垂直对齐方式：
          <code>top</code>
          <code>middle</code>
          <code>bottom</code>
        </td>
        <td>string</td>
        <td><code>top</code></td>
      </tr>
      <!--      justify-->
      <tr>
        <td>justify</td>
        <td>
          flex 布局下的水平排列方式：
          <code>start</code><code>end</code><code>center</code><code>space-around</code><code>space-between</code>
        </td>
        <td>string</td>
        <td><code>start</code></td>
      </tr>
      <!--      gutter-->
      <tr>
        <td>gutter</td>
        <td>栅格间隔，可以写成像素值来设置水平间隔</td>
        <td>number/string</td>
        <td><code>0</code></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang='ts' setup>
import AlignDemo from '../../components/Grid/Align/AlignDemo.vue';
import AlignDesc from '../../components/Grid/Align/AlignDesc.vue';

import JustifyDemo from '../../components/Grid/Justify/JustifyDemo.vue';
import JustifyDesc from '../../components/Grid/Justify/JustifyDesc.vue';

import GutterDemo from '../../components/Grid/Gutter/GutterDemo.vue';
import GutterDesc from '../../components/Grid/Gutter/GutterDesc.vue';

import OffsetDemo from '../../components/Grid/Offset/OffsetDemo.vue';
import OffsetDesc from '../../components/Grid/Offset/OffsetDesc.vue';

import ResponsiveDemo from '../../components/Grid/Responsive/ResponsiveDemo.vue';
import ResponsiveDesc from '../../components/Grid/Responsive/ResponsiveDesc.vue';


import Demo from '../../components/Demo.vue';

</script>

<style lang='scss' scoped>
#main-container {
  :deep(.gutter-box) {
    padding: 16px 0;
    background: #00a0e9;
    line-height: 32px;
    text-align: center;
  }

  :deep(.z_row>div:not(.gutter-row )) {
    padding: 16px 0;
    text-align: center;
    background-color: #0092ff;
    margin-top: 8px;
    margin-bottom: 8px;

    &:nth-child(2n+1) {
      background: rgba(0, 146, 255, .75);
    }
  }

  :deep(.justifyRow) {
    background: lightgray;

    .justify-box {
      background: #0092ff;

      &:nth-child(2n+1) {
        background: rgba(0, 146, 255, .75);
      }
    }


  }
}

// API部分
#api-container {
  .title_row {
    margin: 28px 0 18px 0
  }

  .rowTable {
    width: 100%;
    border: 1px solid #f0f0f0;

    & th {
      padding: 14px 12px 12px 12px;
      text-align: left;
      color: #5c6b77;
      font-weight: 500;
      white-space: nowrap;
      background: rgba(0, 0, 0, .02);
    }

    tbody {
      vertical-align: middle;

      & td {
        padding: 12px;
        border-top: 1px solid #f0f0f0;
        text-align: left;
        color: #595959;
        font-weight: 550;
        white-space: nowrap;

        &:nth-child(3) {
          width: 22%;
          color: #c41d7f;
          font-size: 13px;
        }
      }
    }
  }
}
</style>