import Vue from "vue";
import VueRouter from "vue-router";
import { Route } from "vue-router";
declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}
declare module "iview/dist/types/modal" {
  interface Modal {
    /** 错误弹窗  */
    error(configs: { title?: string, content?: string}) : void
  }
  export const Modal: Modal
}