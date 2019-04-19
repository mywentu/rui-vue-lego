import Vue from "vue";
import VueRouter from "vue-router";
import { Route } from "vue-router";
import { ToastOption } from '../../packages/toast/index'
import { LoadingType } from '../../packages/loading/index'
declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $tips: (option: ToastOption) => void,
    $toast: (option: ToastOption) => void
  }
}