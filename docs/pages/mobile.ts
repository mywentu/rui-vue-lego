
import Vue from 'vue';
import router from '../router';
import Mobile from '../containers/Mobile.vue';


console.log(router, 'router')
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(Mobile)
});