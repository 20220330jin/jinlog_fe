<script setup lang="ts">
/**
 * 메인 소개 컴포넌트
 *
 * @author hjkim
 */
import HJButton from '@/components/common/HJButton.vue';
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div>
          <h1 class="text-4xl font-bold text-foreground mb-4">
            <span>Jinlog</span>
          </h1>
          <p>안녕하세요. 반갑습니다.</p>
        </div>
        <div>
          <HJButton>모든 포스트 보기</HJButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
