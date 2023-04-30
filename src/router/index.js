import { createRouter, createWebHistory } from 'vue-router';


import Home from '../views/Home.vue';
import Quiz from '../components/Quiz.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;