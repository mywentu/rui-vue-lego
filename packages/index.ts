
import Button from './button/index.vue';
import Dialog from './dialog/index.vue';
import Input from './input/index.vue';
import Loading from './loading/Loading.vue';


import $loading from './loading/index';


const components = [
  Button,
  Dialog,
  Input,
  Loading
];

const install = function(Vue) {
  if (install['installed']) return;
  components.map((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$loading = $loading;
};

if (typeof window !== 'undefined' && window['Vue']) {
    install(window['Vue']);
}
export default {
    install,
    Button,
    Dialog,
    Input,
    Loading
};