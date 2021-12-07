import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'
import App from '../App.vue'

const routes = [
  {
    path:'/',
    name:'Home',
    component:App,
    props:true
  },
  {
    path:'/signIn',
    name:'Home',
    component:Login
  },
  {
    path:'/signUp',
    name:'signUp',
    component:()=> import('../components/SignUp.vue')
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
