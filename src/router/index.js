import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'
import App from '../App.vue'

const routes = [
  {
    path:'/signIn',
    name:'signIn',
    component:Login,
  },
  {
    path:'/',
    name:'Home',
    component:Login,
    props:true
  },
  {
    path:'/signUp',
    name:'signUp',
    component:()=> import('../components/SignUp.vue')
  },
  {
    path:'/view',
    name:'View',
    component:()=> import('../views/View.vue')
  },
  {
    path:'/feedback/:key',
    name:'FeedbackDetail',
    component:()=> import('../components/main-features/feedback/FeedbackDetail.vue'),
    props:true
  },
  {
    path:'/new-feedback',
    name:'NewFeedback',
    component:()=> import('../components/main-features/feedback/NewFeedback.vue'),
    props:true
  },
  {
    path:'/main-page',
    name:'MainPage',
    component:()=> import('../views/MainPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
