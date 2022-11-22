<template>
  <!--  基础用法-->
  <Demo :component="BasicNotify" :desc-component="BasicDesc"></Demo>
  <!--  使用不同类型-->
  <Demo :component="DiffType" :desc-component="DiffTypeDesc"></Demo>
  <!--  自定义消息弹出的位置-->
  <Demo :component="DiffPos" :desc-component="DiffPosDesc"></Demo>
  <!--  有位置偏移的通知栏-->
  <Demo :component="WithOffset" :desc-component="OffsetDesc"></Demo>
  <!--  隐藏关闭按钮-->
  <Demo :component="HideClose" :desc-component="HideCloseDesc"></Demo>
  <!--  单个调用-->
  <Demo :component="SpecificTypeFn" :desc-component="SpecificDesc"></Demo>
</template>

<script lang='ts' setup>
import BasicNotify from '../../components/Notification/BasicNotify.vue';
import BasicDesc from '../../components/Notification/BasicDesc.vue';
import DiffType from '../../components/Notification/DiffType.vue';
import DiffTypeDesc from '../../components/Notification/DiffTypeDesc.vue';
import DiffPos from '../../components/Notification/DiffPos.vue';
import DiffPosDesc from '../../components/Notification/DiffPosDesc.vue';
import WithOffset from '../../components/Notification/WithOffset.vue';
import OffsetDesc from '../../components/Notification/OffsetDesc.vue';
import HideClose from '../../components/Notification/HideClose.vue';
import HideCloseDesc from '../../components/Notification/HideCloseDesc.vue';
import SpecificTypeFn from '../../components/Notification/SpecificTypeFn.vue';
import SpecificDesc from '../../components/Notification/SpecificDesc.vue';
</script>

<style lang='scss' scoped>

</style>