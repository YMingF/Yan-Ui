<template>
  <!--  区间间隔Gutter-->
  <div>
    <Demo :component="GutterDemo" :desc-component="GutterDesc"></Demo>
  </div>
  <!-- 排版-->
  <div>
    <Demo :component="JustifyDemo" :desc-component="JustifyDesc"></Demo>
  </div>

</template>

<script lang='ts' setup>
import JustifyDemo from '../../components/Grid/Justify/JustifyDemo.vue';
import JustifyDesc from '../../components/Grid/Justify/JustifyDesc.vue';

import GutterDemo from '../../components/Grid/Gutter/GutterDemo.vue';
import GutterDesc from '../../components/Grid/Gutter/GutterDesc.vue';
import Demo from '../../components/Demo.vue';

</script>

<style lang='scss' scoped>
:deep(.gutter-box) {
  padding: 16px 0;
  background: #00a0e9;
  line-height: 32px;
  text-align: center;
}

:deep(.z_row>div) {
  padding: 16px 0;
  text-align: center;
}

:deep(.justifyRow) {
  padding: 8px 0;
  background: lightgray;

  .justify-box {
    background: #0092ff;

    &:nth-child(2n+1) {
      background: rgba(0, 146, 255, .75);
    }
  }


}
</style>