<script setup lang="ts">

import HJButton from '@/components/common/HJButton.vue';
import { ArrowLeft, Eye, Save, Image, Plus, Camera, X } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import HJCard from '@/components/common/HJCard.vue';
import HJCardContent from '@/components/common/HJCardContent.vue';
import HJCardHeader from '@/components/common/HJCardHeader.vue';
import HJCardTitle from '@/components/common/HJCardTitle.vue';
import { Label } from 'radix-vue';
import HJInput from '@/components/common/HJInput.vue';
import { PostCreateRequest } from '@/types/post.api.type';
import { postApi } from '@/api/post.api';
import HJLabel from '@/components/common/HJLabel.vue';
import HJTextarea from '@/components/common/HJTextarea.vue';

const router = useRouter();
const isPreview = ref<boolean>(false);
const createPostParam = ref<PostCreateRequest>({
  title: '',
  summary: '',
  content: '',
  imageUrl: '',
  tags: [],
});
const mainContentPlaceHolder = '포스트 내용을 작성하세요...여기에 자유롭게 작성하세요: - 개발 경험과 학습 내용 - 여행 후기와 추천 장소 - 일상 이야기와 생각 - 기술적 인사이트 - 문제 해결 과정 - 새로운 발견과 깨달음마크다운 문법도 사용 가능합니다!';
const handlerNavigate = () => {
  router.push({ name: 'posts' });
};
const setIsPreview = () => {
  console.log('isPreview', isPreview.value);
  isPreview.value = !isPreview.value;
};
const savePost = () => {
  console.log('savePost', createPostParam.value);
  postApi.createPost(createPostParam.value).then((res) => {
    console.log('Post saved successfully:', res);
    router.push({ name: 'posts' });
  }).catch((err) => {
    console.error('Error saving post:', err);
  });
};
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-6">
      <HJButton variant="ghost" @click="handlerNavigate" class="gap-2 -ml-2">
        <ArrowLeft class="h-4 w-4" />
        돌아가기
      </HJButton>
    </div>
    <!-- 헤더 -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl">새 포스트 작성</h1>
        <p class="text-muted-foreground mt-2">안녕하세요</p>
      </div>
      <div class="flex gap-2">
        <HJButton variant="outline" @click="setIsPreview" class="gap-2">
          <Eye class="h-4 w-4" />
          <span v-if="isPreview">편집</span>
          <span v-else>미리보기</span>
        </HJButton>
        <HJButton class="gap-2">
          <Save class="h-4 w-4" />
          저장
        </HJButton>
      </div>
    </div>
    <!-- 미리보기 모드 -->
    <HJCard v-if="isPreview">
      <HJCardContent class="p-8">
        <img v-if="createPostParam.imageUrl" :src="createPostParam.imageUrl" alt="미리보기 이미지"
             class="w-full aspect-video object-cover rounded-lg mb-6" />
        <div class="flex flex-wrap gap-2 mb-4">Badge</div>
        <h1>title</h1>
        <p>post summary</p>
        <div>
          <p>paragraph</p>
        </div>
      </HJCardContent>
    </HJCard>
    <!-- 편집 모드 -->
    <div v-else class="space-y-6">
      <HJCard>
        <HJCardHeader>
          <HJCardTitle>기본 정보</HJCardTitle>
        </HJCardHeader>
        <HJCardContent class="space-y-4">
          <div>
            <HJLabel>제목</HJLabel>
            <HJInput id="title" placeholder="제목을 입력하세요." v-model="createPostParam.title" class="text-lg" />
          </div>
          <div>
            <HJLabel>요약</HJLabel>
            <HJTextarea v-model="createPostParam.summary" />
          </div>
          <div>
            <HJLabel>이미지 URL (선택사항)</HJLabel>
            <div class="flex gap-2">
              <HJInput id="image" placeholer="https://example.com/image.jpg" />
              <HJButton variant="outline" size="icon">
                <Image class="h-4 w-4" />
              </HJButton>
            </div>
          </div>
        </HJCardContent>
      </HJCard>
      <HJCard>
        <HJCardHeader>
          <HJCardTitle class="flex items-center justify-between">
            <span>본문</span>
            <span class="text-sm text-muted-foreground">글자</span>
          </HJCardTitle>
        </HJCardHeader>
        <HJCardContent>
          <div class="mb-4 p-3 bg-muted rounded-lg border-b">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <HJButton size="sm" variant="default" class="gap-2 bg-primary">
                  <Camera class="h-4 w-4" />
                  사진 삽입
                </HJButton>
              </div>
            </div>
          </div>
          <HJTextarea :placeholder="mainContentPlaceHolder" rows="30" v-model="createPostParam.content" />
        </HJCardContent>
      </HJCard>
      <HJCard>
        <HJCardHeader>
          <HJCardTitle class="flex items-center justify-between">
            <span>태그</span>
            <span class="text-sm text-muted-foreground">0/10 개</span>
          </HJCardTitle>
        </HJCardHeader>
        <HJCardContent>
          <div class="space-y-4">
            <div class="flex gap-2">
              <HJInput placeholer="태그 입력 후 Enter" />
              <HJButton size="icon" variant="outline">
                <Plus class="h-4 w-4" />
              </HJButton>
            </div>
            <div class="p-3 bg-muted rounded-lg">
              <p class="text-sm text-muted-foreground mb-2">
                <strong>여행 포스트</strong>
              </p>
              <div class="flex flex-wrap gap-2">
                <HJButton size="sm" variant="outline" class="h-6 text-xs">여행</HJButton>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex flex-wrap gap-2">
                <button>
                  <X class="h-3 w-3" />
                </button>
              </div>
              <p>태그를 클릭하면 삭제됩니다.</p>
            </div>
            <div class="text-center py-8 text-muted-foreground">
              <p class="mb-2">아직 태그가 없습니다.</p>
            </div>
          </div>
        </HJCardContent>
      </HJCard>
      <!-- 하단 저장 영역 -->
      <div class="flex justify-between items-center p-6 bg-muted rounded-lg">
        <div class="text-sm text-muted-foreground">
          <p>자동 저장: <span class="text-green-600">활성화</span></p>
          <p>마지막 수정: 방금 전</p>
        </div>
        <div class="flex gap-3">
          <HJButton variant="outline">취소</HJButton>
          <HJButton @click="savePost" class="gap-2 min-w-24">
            <Save class="h-4 w-4" />
            등록하기
          </HJButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
