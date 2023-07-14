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
      component: () => import('../login/signup.vue'), // 修改
    },//sign up 
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../login/signin.vue'), // 修改
    },//sign in
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../forget/forgot.vue'), // 修改
    },//forgot
    {
      path: '/nextforget',
      name: 'nextforget',
      component: () => import('../forget/nextforget.vue'), // 修改
    },//nextforget
    {
      path: '/vrify',
      name: 'vrify',
      component: () => import('../vrify/vrify.vue'), // 修改
    },//vrify
    {
      path: '/vrifyagain',
      name: 'vrifyagain',
      component: () => import('../vrify/vrifyagain.vue'), // 修改
    },//vrifyagain
    {
      path: '/vriftdone',
      name: 'vriftdone',
      component: () => import('../vrify/vriftdone.vue'), // 修改
    },//vriftdone
  ]
});

export default router;
