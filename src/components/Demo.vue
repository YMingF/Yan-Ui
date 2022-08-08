<template>
  <div class="demo">
    <!--    vite.config.ts里有写__sourceCodeTitle的定义，就是你在组件里些的demo标签里的内容-->
    <h2>{{ component.__sourceCodeTitle }} </h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <!--    描述-->
    <div>
      <component :is="descComponent"></component>
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible=!codeVisible">查看代码</Button>
    </div>
    <div v-if="codeVisible" class="demo-code">
        <pre class="language-html"
             v-html="html"></pre>
    </div>
  </div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue';
import 'prismjs';
import {computed, ref} from 'vue';
// 适应这个库的写法
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
    descComponent: Object
  },
  components: {
    Button,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight((props.component as any).__sourceCode, Prism.languages.javascript, 'javascript');
    });
    const codeVisible = ref(false);
    return {Prism, html, codeVisible};
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
<style lang="scss">
// 无法在js里导入这个css，只能这样导
@import 'prismjs/themes/prism-okaidia.css';

</style>