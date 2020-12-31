import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';

import Detail from '@/views/Detail.vue';
import HomePage from '@/views/HomePage.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',

    component: HomePage
  },
  {
    path: '/detail',

    component: Detail
  },

];

const router = new VueRouter({
  routes
});

export default router;
