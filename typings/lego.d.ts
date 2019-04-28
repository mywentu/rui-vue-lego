import Vue, { PluginFunction } from "vue";

export interface LoadingOption {
  /** 注册HMTL ID */
  id: string,
  /** 默认10000 覆盖rui-masket的9999 */
  zIndex: number,
  /** 显示隐藏控制 */
  visible: boolean,
  /** 提示文案 */
  tips: string
}

export interface ToastOption {
  /** 显示内容 */
  msg:string,
  /** 持续显示时间 */
  duration?: number,
  /** toast类型 icon txt */
  type?: string,
  /** 是否成功 */
  isSuccess?: Boolean,
  /** 关闭时回调 */
  onClose?: Function
}

declare module "vue/types/vue" {
  interface Vue {
    $tips: (option: ToastOption) => void,
    $toast: (option: ToastOption) => void
  }
}


interface RuiVueLego extends PluginFunction<any> {}


declare const ruiVueLego: RuiVueLego;
export default ruiVueLego;
