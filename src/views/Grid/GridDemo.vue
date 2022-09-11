<template>
  <!--  区间间隔Gutter-->
  <div>
    <Demo :component="GutterDemo" :desc-component="GutterDesc"></Demo>
  </div>
  <!-- 排版-->
  <div>
    <Demo :component="JustifyDemo" :desc-component="JustifyDesc"></Demo>
  </div>

  <!-- 列偏移-->
  <div>
    <Demo :component="OffsetDemo" :desc-component="OffsetDesc"></Demo>
  </div>

</template>

<script lang='ts' setup>
import JustifyDemo from '../../components/Grid/Justify/JustifyDemo.vue';
import JustifyDesc from '../../components/Grid/Justify/JustifyDesc.vue';

import GutterDemo from '../../components/Grid/Gutter/GutterDemo.vue';
import GutterDesc from '../../components/Grid/Gutter/GutterDesc.vue';

import OffsetDemo from '../../components/Grid/Offset/OffsetDemo.vue';
import OffsetDesc from '../../components/Grid/Offset/OffsetDesc.vue';
import Demo from '../../components/Demo.vue';

</script>

<style lang='scss' scoped>
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
</style>