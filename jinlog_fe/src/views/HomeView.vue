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
          <div>
            <BlogPostCard />
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
