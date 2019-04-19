
import Dialog from './dialog/index.vue';
import Loading from './loading/Loading.vue';

import $toast from './loading/index';
import $loading from './loading/index';


const components = [
  Dialog,
  Loading
];

const install = function(Vue) {
  if (install['installed']) return;
  components.map((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$toast = $toast;
  Vue.prototype.$loading = $loading;
};

if (typeof window !== 'undefined' && window['Vue']) {
    install(window['Vue']);
}
export default {
    install,
    Dialog,
    Loading
};