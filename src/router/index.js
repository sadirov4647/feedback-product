import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'

const routes = [
  {
    path:'/signIn',
    name:'signIn',
    component:Login
  },
  {
    path:'/',
    name:'signUp',
    component:()=> import('../components/SignUp.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
