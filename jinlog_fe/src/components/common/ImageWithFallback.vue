<template>
  <!-- 이미지가 정상적으로 로드될 경우: 부모로부터 받은 모든 속성(class, style 등)을 v-bind="attrs"로 전달합니다. -->
  <img
    v-if="!didError"
    :src="src"
    :alt="alt"
    v-bind="attrs"
    @error="handleError"
  />
  <!-- 이미지 로딩 실패 시: computed 속성으로 클래스와 스타일을 병합하여 전달합니다. -->
  <div v-else v-bind="fallbackAttrs">
    <div class="flex items-center justify-center w-full h-full">
      <img
        :src="ERROR_IMG_SRC"
        alt="Error loading image"
        :data-original-url="src"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs, computed, type StyleValue } from 'vue';

// defineProps: 부모로부터 받을 props 타입을 명시적으로 정의합니다.
interface Props {
  src?: string;
  alt?: string;
}
defineProps<Props>();

// defineOptions: Vue가 속성을 자동으로 상속하는 것을 비활성화합니다.
// v-if/v-else 분기 때문에 수동으로 속성을 바인딩하기 위함입니다.
defineOptions({
  inheritAttrs: false,
});

// useAttrs: props로 정의되지 않은 모든 부모 속성(class, style, data-*)에 접근합니다.
const attrs = useAttrs();

const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

// ref: 이미지 로딩 에러 상태를 관리합니다.
const didError = ref(false);

const handleError = () => {
  didError.value = true;
};

// computed: fallback UI를 위한 속성을 계산합니다.
// 이렇게 하면 템플릿이 간결해지고 타입 안정성이 높아집니다.
const fallbackAttrs = computed(() => {
  // attrs에서 class와 style을 분리하고 나머지 속성은 rest에 담습니다.
  const { class: parentClass, style: parentStyle, ...rest } = attrs;

  return {
    // class와 style을 제외한 나머지 속성들을 그대로 전달합니다.
    ...rest,
    // 부모로부터 받은 style을 타입스크립트가 이해할 수 있도록 캐스팅합니다.
    style: parentStyle as StyleValue,
    // 컴포넌트의 기본 클래스와 부모로부터 받은 클래스를 안전하게 병합합니다.
    class: ['inline-block bg-gray-100 text-center align-middle', parentClass],
  };
});
</script>