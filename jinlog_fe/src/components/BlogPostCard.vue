<script setup lang="ts">

import HJCard from './common/HJCard.vue';
import { ref } from 'vue';
import HJCardHeader from '@/components/common/HJCardHeader.vue';
import HJTechBadge from '@/components/common/HJTechBadge.vue';
import HJCardContent from '@/components/common/HJCardContent.vue';
import { Calendar, Clock } from 'lucide-vue-next';
import ImageWithFallback from '@/components/common/ImageWithFallback.vue';

/**
 * 블로그 포스트 카드 컴포넌트
 *
 * @author hjkim
 */
const isLoading = ref(false);

const props = withDefaults(defineProps<{
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    imageUrl: string;
  };
}>(), {});
</script>

<template>
  <HJCard
    class="h-full group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-background to-muted cursor-pointer">
    <div v-if="props.post.imageUrl" class="relative overflow-hidden">
      <ImageWithFallback :src="props.post.imageUrl" :alt="props.post.title" class="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500" />
      <div v-if="isLoading" class="absolute inset-0 bg-muted flex items-center justify-center">
        <div class="space-y-2 text-center">
          <p class="text-xs text-muted-foreground">이미지 로딩 중..</p>
        </div>
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <HJCardHeader class="space-y-3">
      <div class="flex flex-wrap gap-2">
        <div v-for="tag in props.post.tags" class="transform hover:scale-105 transition-transform duration-200">
          <HJTechBadge :tech="tag" size="sm" variant="outline" class="hover:shadow-sm" />
        </div>
      </div>
      <h3 class="line-clamp-2 group-hover:text-primary transition-colors duration-300">{{ props.post.title }}</h3>
    </HJCardHeader>
    <HJCardContent class="space-y-4 flex-1 flex flex-col">
      <p class="text-muted-foreground line-clamp-3 leading-relaxed flex-1">{{ props.post.excerpt }}</p>
      <div class="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
        <div class="flex items-center gap-2">
          <Calendar class="h-4 w-4" />
          <span>{{ props.post.date }}</span>
        </div>
        <div class="flex items-center gap-2">
          <Clock class="h-4 w-4" />
          <span>{{ props.post.readTime }}</span>
        </div>
      </div>
    </HJCardContent>
  </HJCard>
</template>

<style scoped>

</style>
