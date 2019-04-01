import ElementDataset from 'element-dataset'
import 'es6-promise/auto'
import '@/common/js/polyfill'
import '@/common/css/common.scss'
import '@/common/css/font.scss';

import Vue from 'vue'
import Case from '@/containers/Case.vue'
import store from '@/store/index'
import router from '@/router/index'

import packages from '@/components/packages/index';

ElementDataset() // data-set 兼容

Vue.use(packages)
Vue.config.productionTip = false

router.afterEach(route => {
  window.scrollTo(0, 0)
})

new Vue({
  el: '#case',
  store,
  router,
  render: h => h(Case)
});