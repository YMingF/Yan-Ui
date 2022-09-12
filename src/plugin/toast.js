import Toast from '../components/Toast/Toast.vue';
import {createVNode, render} from 'vue';

export default {
    install: (app, options) => {
        app.config.globalProperties.$toast = (toastOptions) => {
            const toastNode = createVNode(Toast, {
                ...toastOptions
            });
            let mountNode = document.createElement('div');
            render(toastNode, mountNode);
            document.body.appendChild(mountNode);
        };

    }
};