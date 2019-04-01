import ElementDataset from 'element-dataset'
import 'es6-promise/auto'
import '@/common/js/polyfill'

import Vue from 'vue'
import Docs from '@/containers/Docs.vue'
import store from '@/store/index'
import router from '@/router/index'

ElementDataset() // data-set 兼容



Vue.config.productionTip = false


router.afterEach(route => {
  window.scrollTo(0, 0)
})
new Vue({
  el: '#docs',
  store,
  router,
  render: h => h(Docs)
})
