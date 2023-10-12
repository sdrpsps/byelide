import { createRouter, createWebHistory } from 'vue-router';
import AppView from '../views/AppView.vue';
import { h } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: AppView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: () => import('../views/DataSourceView.vue'),
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import('../views/PageLayoutView.vue'),
        },
        {
          path: 'actions',
          name: 'actions',
          component: () => import('../views/ActionsView.vue'),
        },
      ],
    },
    {
      path: '/',
      redirect: '/app/layout',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: h('div', 'Page not found'),
    },
  ],
});

export default router;
