import { createRouter, createWebHashHistory } from 'vue-router';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('../view/homepage.vue'),
    },//主页
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../login/signup.vue'),
    },//sign up 
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../login/signin.vue'),
    },//sign in

    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../forget/forgot.vue'),
    },//forgot
    {
      path: '/nextforget',
      name: 'nextforget',
      component: () => import('../forget/nextforget.vue'),
    },//nextforget
    {
      path: '/vrify',
      name: 'vrify',
      component: () => import('../vrify/vrify.vue'),
    },//vrify
    {
      path: '/vrifyagain',
      name: 'vrifyagain',
      component: () => import('../vrify/vrifyagain.vue'),
    },//vrifyagain
    {
      path: '/vriftdone',
      name: 'vriftdone',
      component: () => import('../vrify/vriftdone.vue'),
    },//vriftdone
    {
      path: '/home',
      name: 'home',
      component: () => import('../home/home.vue'),
    },//主页
  ]
});

export default router;
