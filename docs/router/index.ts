import Vue from "vue";
import Router, { RouteConfig } from "vue-router";

import demos from './demo.config';
import docs from  './docs.config';

Vue.use(Router);

const generateRoute = () => {
  const routes:RouteConfig[] = [{
    path: '/',
    redirect: '/button'
  }];
  const demoRoutes = Object.keys(demos).map(route => ({
    name: route,
    path: `/demo/${route}`,
    component: demos[route]
  }));

  const docRoutes = Object.keys(docs).map(route => ({
    name: route,
    path: `/${route}`,
    component: docs[route]
  }));

  return routes.concat(demoRoutes, docRoutes);
}

const routes = generateRoute();


console.log(routes, 'routesroutesroutes')

export default new Router({
  routes: routes
});
