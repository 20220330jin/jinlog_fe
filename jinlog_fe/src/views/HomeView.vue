<script setup lang="ts">
/**
 * 메인 화면
 *
 * @author hjkim
 */
import Hero from '../components/common/Hero.vue';
import BlogPostCard from '@/components/BlogPostCard.vue';
import HJButton from '@/components/common/HJButton.vue';
import { ref } from 'vue';
import { Post } from '@/types/post';
import router from '@/router';

const posts = ref<Post[]>([]);
const handleNavigate = (path: string) => {
  console.log('Navigate to all posts', path);
  router.push({ name: path });
  // 여기에 네비게이션 로직을 추가할 수 있습니다.
};

const samplePosts = [
  {
    id: '1',
    title: 'React 18의 새로운 기능들 - Concurrent Features 완벽 가이드',
    excerpt: 'React 18에서 도입된 Concurrent Features와 Suspense, 그리고 새로운 Hooks들을 실제 예제와 함께 자세히 알아보겠습니다.',
    date: '2025-01-10',
    readTime: '8분',
    tags: ['React', 'JavaScript', 'Frontend'],
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
  },
  {
    id: '2',
    title: '제주도 3박 4일 혼자 여행기 - 숨은 맛집과 카페 투어',
    excerpt: '제주도를 혼자 여행하며 발견한 로컬들이 추천하는 진짜 맛집들과 감성 넘치는 카페들을 소개합니다.',
    date: '2025-01-08',
    readTime: '12분',
    tags: ['여행', '제주도', '맛집', '카페'],
    imageUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d1c48a?w=500&h=300&fit=crop',
  },
  {
    id: '3',
    title: '개발자의 일상 - 새해 목표와 학습 계획 세우기',
    excerpt: '2025년 새해를 맞아 개인적인 성장 목표와 기술 학습 계획을 세워보며, 지난 해를 돌아보는 시간을 가져봤습니다.',
    date: '2025-01-01',
    readTime: '6분',
    tags: ['일상', '회고', '목표', '성장'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'TypeScript 고급 패턴과 실무 활용법',
    excerpt: 'TypeScript의 고급 타입 시스템을 활용한 안전하고 확장 가능한 코드 작성 방법을 소개합니다.',
    date: '2024-12-28',
    readTime: '15분',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop'
  },
  {
    id: '5',
    title: '부산 감천문화마을에서의 하루',
    excerpt: '부산의 숨은 보석 같은 곳, 감천문화마을에서 보낸 특별한 하루를 사진과 함께 기록해봤습니다.',
    date: '2024-12-25',
    readTime: '8분',
    tags: ['여행', '부산', '문화', '사진'],
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop'
  },
  {
    id: '6',
    title: '재택근무 1년 후기 - 나만의 루틴 만들기',
    excerpt: '재택근무를 시작한 지 1년이 지나면서 나만의 효율적인 업무 루틴과 워라밸을 찾아가는 과정을 공유합니다.',
    date: '2024-12-20',
    readTime: '10분',
    tags: ['일상', '재택근무', '루틴', '워라밸'],
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop'
  },
];

const handlePostClick = (postId: string) => {
  console.log('Post clicked:', postId);
  router.push({ name: 'postDetail', params: { id: postId } });
};
</script>

<template>
  <main>
    <Hero @navigate-to=handleNavigate />
    <section id="blog" class="py-24 bg-muted/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl mb-4">최신 블로그 포스트</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">안녕하세욥!</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div v-for="post in samplePosts">
            <div>
              <BlogPostCard :post="post" @click="() => handlePostClick(post.id)" />
            </div>
          </div>
        </div>
        <div class="text-center">
          <HJButton @click="handleNavigate('posts')" class="gap-2">모든 포스트 보기</HJButton>
        </div>
      </div>
    </section>
    <section id="contact" class="py-24 bg-primary text-primary-foreground">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl mb-4">하이?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">안녕하세요!!</p>
        <HJButton variant="secondary" size="lg" class="gap-2" @click="handleNavigate('about')">About Me</HJButton>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
