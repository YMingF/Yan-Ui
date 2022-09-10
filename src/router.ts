import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import InputDemo from './components/Input/InputDemo.vue';
import TPDemo from './components/typography/TPDemo.vue';
import GridDemo from './views/Grid/GridDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import start from './markdown/start.md';
import install from './markdown/install.md';

const md = string => {
  return h(Markdown, {content: string, key: string});
};
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'}, //用''空字符来表示默认页面
        {path: 'intro', component: md(intro)},
        {path: 'start', component: md(start)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input', component: InputDemo},
        {path: 'typo', component: TPDemo},
        {path: 'grid', component: GridDemo}
      ],
    },
  ],
});
router.afterEach(()=>{

})