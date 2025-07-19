<script setup lang="ts">
/**
 * 메인 소개 컴포넌트
 *
 * @author hjkim
 */
import HJButton from '@/components/common/HJButton.vue';

const emit = defineEmits(['navigate-to']);

const onNavigate = (path: 'posts' | 'about') => {
  console.log('Navigating to:', path);
  emit('navigate-to', path);
}
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-8">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-6xl">
            <span class="text-primary">Jinlog</span>
          </h1>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">안녕하세요. 반갑습니다.</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <HJButton @click="onNavigate('posts')" class="gap-2">모든 포스트 보기</HJButton>
          <HJButton @click="onNavigate('about')" variant="outline" class="gap-2">About me</HJButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
