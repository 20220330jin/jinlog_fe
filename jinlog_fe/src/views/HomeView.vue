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
    <section class="">
      <div>
        <div>
          <h2>최신 블로그 포스트</h2>
          <p>안녕하세욥!</p>
        </div>
        <div>
          <div>
            <BlogPostCard />
          </div>
        </div>
        <div>
          <HJButton @click="handleNavigate('ALL')">모든 포스트 보기</HJButton>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h2>하이?</h2>
        <p>안녕하세요!!</p>
        <HJButton>About Me</HJButton>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
