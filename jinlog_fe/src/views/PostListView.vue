<script setup lang="ts">

import HJButton from '@/components/common/HJButton.vue';
import { ArrowLeft, Search, Filter } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import HJInput from '@/components/common/HJInput.vue';
import {
  HJSelect,
  HJSelectContent,
  HJSelectGroup,
  HJSelectItem,
  HJSelectLabel,
  HJSelectTrigger,
  HJSelectValue,
} from '@/components/common/HJSelect';
import BlogPostCard from '@/components/BlogPostCard.vue';

const router = useRouter();
const handleNavigate = (path: string) => {
  // 홈으로 이동하는 로직
  router.push({ name: path });
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
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-6">
      <HJButton variant="ghost" @click="() => handleNavigate('home')" class="gap-2 -ml-2">
        <ArrowLeft class="h-4 w-4" />
        홈으로
      </HJButton>
    </div>
    <!-- 헤더 -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-3xl">모든 포스트</h1>
          <p class="text-muted-foreground mt-2">안녕하세요.</p>
        </div>
        <HJButton @click="() => handleNavigate('createPost')" class="gap-2">새 포스트 작성</HJButton>
      </div>
      <!-- 검색 및 필터 -->
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="relative flex-1">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <HJInput placeholder="포스트 검색..." class="pl-10" />
          </div>
          <HJSelect>
            <HJSelectTrigger class="w-full sm:w-48">
              <Filter class="h-4 w-4 mr-2" />
              <HJSelectValue placeholder="카테고리" />
            </HJSelectTrigger>
            <HJSelectContent>
              <HJSelectItem value="all">모든 카테고리</HJSelectItem>
            </HJSelectContent>
          </HJSelect>
          <HJSelect>
            <HJSelectTrigger class="w-full sm:w-32">
              <HJSelectValue placeholder="정렬" />
            </HJSelectTrigger>
            <HJSelectContent>
              <HJSelectItem value="date">최신순</HJSelectItem>
              <HJSelectItem value="title">제목순</HJSelectItem>
            </HJSelectContent>
          </HJSelect>
        </div>
      </div>
      <!-- 결과 요약 -->
      <div class="flex items-center justify-between text-sm text-muted-foreground mt-6 p-4 bg-muted rounded-lg mb-8">
        <div class="flex items-center gap-2">
            <span
              class="inline-flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs">4</span>
          <span>개의 포스트</span>
        </div>
        <HJButton variant="ghost" size="sm">필터 초기화</HJButton>
      </div>
      <!-- 포스트 목록 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="post in samplePosts">
          <div>
            <BlogPostCard :post="post" />
          </div>
        </div>
      </div>
      <!-- 인라인 로딩 -->
      <div></div>
      <!-- 결과 없음 -->
      <div></div>
      <!-- 로딩 완료 후 추가 액션 -->
      <div class="text-center py-12 border-t border-border mt-12">
        <div class="space-y-4">
          <div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>모든 포스트를 불러왔습니다.</span>
            <div class="h-1 w-1 bg-muted-foreground rounded-full" />
            <span>2개</span>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <HJButton variant="outline" class="gap-2">새 포스트 작성하기</HJButton>
            <HJButton variant="ghost" class="gap-2">맨 위로 이동</HJButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
