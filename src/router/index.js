import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'
import App from '../App.vue'

const routes = [
  {
    path:'/',
    name:'Home',
    component:App
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
    path:'/new-feedback',
    name:'NewFeedback',
    component:()=> import('../components/main-features/feedback/NewFeedback.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
