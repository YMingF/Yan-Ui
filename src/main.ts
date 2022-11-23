import './index.scss';
import './assets/less/global.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css';
import Markdown from './components/common/Markdown.vue';
import toast from './plugin/toast.js';
import globalComponents from './components/index';
import {createPinia} from 'pinia';
import {LoadingDirective} from './lib/Loading/Loading';

const pinia = createPinia();
const app = createApp(App);
app.directive('loading', LoadingDirective);
app.component('Markdown', Markdown);
app.use(globalComponents);
app.use(router);
app.use(toast);
app.use(pinia);
app.mount('#app');