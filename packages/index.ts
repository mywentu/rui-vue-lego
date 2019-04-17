
import Button from './button/index.vue';
const components = [Button];

const install = function(vue) {
  /* istanbul ignore if */
  if (install['installed']) return;
  /*eslint-disable*/
  components.map((component) => {
    vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window['Vue']) {
    install(window['Vue']);
}
export default {
    install,
    Button
};
export { Button };