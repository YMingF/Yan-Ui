import Toast from '../components/Toast/Toast.vue';
import {createVNode, render} from 'vue';

export default {
    install: (app, options) => {
        app.config.globalProperties.$toast = (toastOptions) => {
            const {message, autoCloseDelay, closeButton, enableHtml} = toastOptions;
            const toastNode = createVNode(Toast, {
                message,
                autoCloseDelay,
                closeButton,
                enableHtml
            });
            let mountNode = document.createElement('div');
            render(toastNode, mountNode);
            document.body.appendChild(mountNode);
        };

    }
};