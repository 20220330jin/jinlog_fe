<script setup lang="ts">

import HJCard from './common/HJCard.vue';
import { ref } from 'vue';
/**
 * 블로그 포스트 카드 컴포넌트
 *
 * @author hjkim
 */
const isLoading = ref(true);
</script>

<template>
  <HJCard>
    <div>
      <div>
        <div>
          <p>이미지 로딩 중..</p>
        </div>
      </div>
    </div>
  </HJCard>
</template>

<style scoped>

</style>
