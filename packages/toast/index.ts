import Vue from 'vue'
import Toast from './Toast.vue'
import { whichTransitionEvent } from '../utils/index'
import { ToastOption } from '../../typings/lego'


let timer = null
let toastInstance = null
const ToastConstructor = Vue.extend(Toast)
const transitionEvt = whichTransitionEvent()

ToastConstructor.prototype.close = function(onClose?:Function) {
  this.visible = false
  toastInstance = null
  this.$el.addEventListener(transitionEvt, this.destroyed)
  if(onClose) {
    Vue.nextTick(function() {
      onClose()
    })
  }
}

ToastConstructor.prototype.destroyed = function(event) {
  document.body.removeChild(event.target)
}

/** 暂不支持同时显示多个toast */
const getInstance  = (option: ToastOption) => {
  if(!toastInstance) {
    toastInstance = new ToastConstructor({
      propsData: {
        msg: option.msg,
        visible: true,
        type: option.type,
        duration: option.duration,
        isSuccess: option.isSuccess
      },
      el: document.createElement('div')
    })
  } else {
    timer = null
  }
  return toastInstance
}

/** toast 方法 */
const $toast = (option: ToastOption) => {
  const instance =  getInstance(option)
  clearTimeout(timer)
  document.body.appendChild(instance.$el);
  Vue.nextTick(function() {
    instance.visible = true
    instance.$el.removeEventListener(transitionEvt, instance.destroyed)
    timer = setTimeout(() => {
      instance.close(option.onClose)
    }, option.duration ? option.duration : 3000)
  })
}

export default $toast