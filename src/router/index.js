import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import BasicView from '../views/BasicView.vue'
import LoginView from '../views/LoginView.vue'
import DataBinding from '../views/DataBinding.vue';
import dataBindingInputText from "../views/DataBindingInputText.vue";
import dataBindingInputNumber from "../views/DataBindingInputNumber.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/databinding',
    name: 'dataBinding',
    component: DataBinding
  },
  {
    path: '/databindinginputtext',
    name: 'databindinginputtext',
    component: dataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'databindinginputnumber',
    component: dataBindingInputNumber
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
