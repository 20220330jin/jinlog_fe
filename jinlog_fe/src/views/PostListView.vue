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

const router = useRouter();
const handleNavigate = (path: string) => {
  // 홈으로 이동하는 로직
  router.push({ name: path });
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div>
      <HJButton @click="() => handleNavigate('home')">
        <ArrowLeft />
        홈으로
      </HJButton>
    </div>
    <!-- 헤더 -->
    <div>
      <div>
        <div>
          <h1>모든 포스트</h1>
          <p>안녕하세요.</p>
        </div>
        <HJButton @click="() => handleNavigate('createPost')">새 포스트 작성</HJButton>
      </div>
      <!-- 검색 및 필터 -->
      <div>
        <div>
          <div>
            <Search />
            <HJInput />
          </div>
          <HJSelect>
            <HJSelectTrigger>
              <Filter />
              <HJSelectValue placeholder="카테고리" />
            </HJSelectTrigger>
            <HJSelectContent>
              <HJSelectItem value="all">모든 카테고리</HJSelectItem>
            </HJSelectContent>
          </HJSelect>
          <HJSelect>
            <HJSelectTrigger>
              <HJSelectValue placeholder="정렬" />
            </HJSelectTrigger>
            <HJSelectContent>
              <HJSelectItem value="date">최신순</HJSelectItem>
              <HJSelectItem value="title">제목순</HJSelectItem>
            </HJSelectContent>
          </HJSelect>
        </div>
        <!-- 결과 요약 -->
        <div>
          <div>
            <span></span>
            <span>개의 포스트</span>
          </div>
          <HJButton>필터 초기화</HJButton>
        </div>
      </div>
      <!-- 포스트 목록 -->
      <div></div>

    </div>
  </div>
</template>

<style scoped>

</style>
