import VueRouter from 'vue-router';
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('@/views/App.vue') },
    { path: '/home', component: () => import('@/views/Home.vue') }
  ]
  
  const router = new VueRouter({
    routes // short for `routes: routes`
  });

  export default router;