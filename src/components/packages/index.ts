import Vue from 'vue'

import Toast from './Toast/Toast'
import Loading  from './Loading/Loading'

import Popup from './Popup/Popup.vue'
import Dialog from './Dialog/Dialog.vue'
import VueInput from './Input/Input.vue'
import Button from './Button/Button.vue'


Vue.prototype.$loading = Loading
Vue.prototype.$toast = Toast


const install = (Vue) => {
  Vue.component('popup', Popup)
  Vue.component('alert', Dialog)
  Vue.component('vueInput', VueInput)
  Vue.component('button', Button)
}

export default install