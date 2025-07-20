<script setup lang="ts">

import HJButton from '@/components/common/HJButton.vue';
import { Calendar, Clock, Eye, Heart, MessageCircle, Share2, ArrowLeft } from 'lucide-vue-next';
import ImageWithFallback from '@/components/common/ImageWithFallback.vue';
import HJCard from '@/components/common/HJCard.vue';
import HJTechBadge from '@/components/common/HJTechBadge.vue';

const samplePost = {
  id: '1',
  title: 'React 18의 새로운 기능들 - Concurrent Features 완벽 가이드',
  excerpt: 'React 18에서 도입된 Concurrent Features와 Suspense, 그리고 새로운 Hooks들을 실제 예제와 함께 자세히 알아보겠습니다.',
  date: '2025-01-10',
  readTime: '8분',
  tags: ['React', 'JavaScript', 'Frontend'],
  imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
  content: `
# React 18의 새로운 기능들 - Concurrent Features 완벽 가이드

React 18이 출시되면서 가장 주목받는 기능은 단연 **Concurrent Features**입니다. 이번 포스트에서는 이러한 새로운 기능들을 실제 예제와 함께 자세히 살펴보겠습니다.

## Concurrent Rendering이란?

Concurrent Rendering은 React가 여러 작업을 동시에 처리할 수 있도록 하는 기능입니다. 이를 통해 사용자 인터페이스의 반응성을 크게 향상시킬 수 있습니다.

### 주요 장점

1. **더 나은 사용자 경험**: 긴 렌더링 작업이 사용자 입력을 차단하지 않음
2. **우선순위 기반 업데이트**: 중요한 업데이트가 먼저 처리됨
3. **부드러운 애니메이션**: 렌더링 중에도 애니메이션이 끊기지 않음

## Suspense의 진화

React 18에서 Suspense는 데이터 페칭뿐만 아니라 다양한 비동기 작업을 처리할 수 있게 되었습니다.`
};
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <HJButton variant="ghost" class="gap-2">
        <ArrowLeft class="h-4 w-4" />
        포스트 목록
      </HJButton>
    </div>
    <!-- 포스트 헤더  -->
    <article class="space-y-8">
      <header class="space-y-6">
        <div class="flex flex-wrap gap-2">
          <div v-for="tag in samplePost.tags">
            <HJTechBadge :key="tag" :tech="tag" size="sm" variant="outline" />
          </div>
        </div>
        <h1 class="text-3xl lg:text-4xl leading-tight">{{ samplePost.title }}</h1>
        <div class="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <Calendar class="h-4 w-4" />
            <span>{{ samplePost.date }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Clock class="h-4 w-4" />
            <span>{{ samplePost.readTime }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Eye class="h-4 w-4" />
            <span>12 조회</span>
          </div>
        </div>
        <div v-if="samplePost.imageUrl" class="w-full aspect-video overflow-hidden rounded-lg">
          <ImageWithFallback :src="samplePost.imageUrl" :alt="samplePost.title" class="w-full h-full object-cover" />
        </div>
      </header>
      <!-- 포스트 내용 -->
      <div class="max-w-none">
        <div class="whitespace-pre-wrap leading-relaxed">
          {{ samplePost.content }}
        </div>
      </div>
      <HJCard class="p-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <HJButton variant="default" size="sm" class="gap-2">
              <Heart class="h-4 w-4" />
            </HJButton>
            <HJButton variant="outline" size="sm" class="gap-2">
              <MessageCircle class="h-4 w-4" />
            </HJButton>
          </div>
          <HJButton variant="outline" size="sm" class="gap-2">
            <Share2 class="h-4 w-4" />
            공유
          </HJButton>
        </div>
      </HJCard>
      <!-- 작성자 정보 -->
      <HJCard class="p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span class="text-primary font-medium">진</span>
          </div>
          <div class="flex-1">
            <h3 class="font-medium">김현진</h3>
            <p class="text-sm text-muted-foreground mt-1">안녕하세요.</p>
            <HJButton variant="outline" size="sm" class="mt-3">더 알아보기</HJButton>
          </div>
        </div>
      </HJCard>
    </article>
  </div>
</template>

<style scoped>

</style>
