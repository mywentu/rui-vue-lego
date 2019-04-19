
import Vue from 'vue';
import router from '../router';
import Mobile from '../containers/Mobile.vue';
import '../../packages/theme/index.scss';


console.log(router, 'router')
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(Mobile)
});