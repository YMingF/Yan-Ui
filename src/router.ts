import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './lib/Switch/SwitchDemo.vue';
import ButtonDemo from './views/Button/ButtonDemo.vue';
import DialogDemo from './components/Dialog/DialogDemo.vue';
import TabsDemo from './views/Tab/TabsDemo.vue';
import InputDemo from './views/Input/InputDemo.vue';
import TPDemo from './views/Typography/TPDemo.vue';
import ToastDemo from './views/Toast/ToastDemo.vue';
import PopoverDemo from './views/Popover/PopoverDemo.vue';
import GridDemo from './views/Grid/GridDemo.vue';
import {h} from 'vue';
import Markdown from './components/common/Markdown.vue';
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
        {path: 'grid', component: GridDemo},
        {path: 'toast', component: ToastDemo},
        {path: 'popover', component: PopoverDemo}
      ],
    },
  ],
});
router.afterEach(()=>{

})