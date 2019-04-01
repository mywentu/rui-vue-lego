
import Vue from 'vue';
import router from '../router';
import Desktop from '../containers/Desktop.vue';


console.log(router, 'router')
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(Desktop)
});