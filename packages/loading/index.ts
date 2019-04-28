
import Vue from 'vue'
import Loading from './Loading.vue'
import { LoadingOption } from '../../typings/lego'



const defaultProps: LoadingOption = {
  id: '$loading-common-el',
  zIndex: 10000,
  visible: false,
  tips: '加载中'
}


let loadingInstance = null
const LoadingConstructor = Vue.extend(Loading)


LoadingConstructor.prototype.show = function() {
  if(this.visible) return
  this.visible = true
  Vue.nextTick(() => {
    this.$el.id = defaultProps.id
    this.$el.style.zIndex = defaultProps.zIndex
    document.body.appendChild(this.$el)
  })
}

LoadingConstructor.prototype.hide = function() {
  if(!this.visible) return
  this.instance = null
  this.visible = false
  const loadingEl = document.getElementById(defaultProps.id)
  document.body.removeChild(loadingEl)
}

const getInstance  = () => {
  if(!loadingInstance) {
    loadingInstance = new LoadingConstructor({
      propsData: {
        msg: defaultProps.tips,
        visible: defaultProps.visible
      },
      el: document.createElement('div')
    })
  }
  return loadingInstance
}

export interface LoadingType {
  /** loading 隐藏 */
  hide: Function,
  /** loading 显示 */
  show: Function
}

const $loading:LoadingType = getInstance()

export default $loading
