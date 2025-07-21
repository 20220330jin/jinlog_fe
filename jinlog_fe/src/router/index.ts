import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostListView from '../views/PostListView.vue';
import AboutView from '../views/AboutView.vue';
import PostDetailView from '@/views/PostDetailView.vue';
import PostCreateView from '@/views/PostCreateView.vue';

/**
 * 프로젝트 route 관리
 */
// Vue router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/post',
      name: 'post',
      children: [
        {
          path: '/posts',
          name: 'posts',
          component: PostListView,
        },
        {
          path: '/:id',
          name: 'postDetail',
          component: PostDetailView,
        },
        {
          path: '/createPost',
          name: 'createPost',
          component: PostCreateView,
        },
      ],
    },
  ],
});

export default router;
