import Vue from "vue";
import Router from "vue-router";

import docs from './docs';
import cases from  './cases';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    docs,
    cases
  ]
});
