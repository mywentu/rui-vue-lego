import Vue from "vue";
import Router, { RouteConfig } from "vue-router";

import demos from './demo.config';
import docs from  './docs.config';

Vue.use(Router);

  let routes:RouteConfig[] = [{
    path: '/',
    redirect: '/button'
  }];
  
  export const demoRoutes = Object.keys(demos).map(route => ({
    name: `demo-${route}`,
    path: `/demo/${route}`,
    component: demos[route]
  }));

  export const docRoutes = Object.keys(docs).map(route => ({
    name: route,
    path: `/${route}`,
    component: docs[route]
  }));

  routes = routes.concat(demoRoutes, docRoutes);

export default new Router({
  routes: routes
});
