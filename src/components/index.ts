import type {App, Component} from 'vue';
import Popover from '../lib/popover/popover.vue';
import Button from '../lib/Button.vue';
import Input from '../lib/input/Input.vue';
import InputPassword from '../lib/input/InputPassword.vue';
import InputTextArea from '../lib/input/textArea.vue';
import Switch from '../lib/Switch.vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import Row from '../lib/Grid/row.vue';
import Col from '../lib/Grid/col.vue';
import Typography from '../lib/typography/copyEditParagraph.vue';
import Dialog from '../lib/Dialog.vue';
import Collapse from '../lib/Collapse/collapse.vue';
import CollapseItem from '../lib/Collapse/collapse-item.vue';

const components: { [propName: string]: Component } = {
    ZPopover: Popover,
    ZButton: Button,
    ZInput: Input,
    ZInputPassword: InputPassword,
    ZInputTextArea: InputTextArea,
    ZSwitch: Switch,
    ZTabs: Tabs,
    ZTab: Tab,
    ZRow: Row,
    ZCol: Col,
    ZTypography: Typography,
    ZDialog: Dialog,
    ZCollapse: Collapse,
    ZCollapseItem: CollapseItem,
};
export default {
    install: (Vue: App) => {
        for (const key in components) {
            Vue.component(key, components[key]);
        }

    }
};