<script setup lang="ts">
import { computed } from 'vue';
import { techConfigs } from '@/config/techConfig';

const props = withDefaults(defineProps<{
  tech: string;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  showIcon?: boolean; // 아이콘 표시 여부를 제어하는 prop 추가
}>(), {
  variant: 'default',
  size: 'default',
  showIcon: true, // 기본값은 true로 설정
});

const config = computed(() => techConfigs[props.tech]);

const badgeClasses = computed(() => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1 gap-1',
    default: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2',
  };
  return `inline-flex items-center rounded-md font-semibold border transition-all duration-200 hover:shadow-sm hover:scale-105 ${sizeClasses[props.size]}`;
});

// 아이콘 크기를 동적으로 계산합니다.
const iconSizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'h-3 w-3';
    case 'lg': return 'h-4 w-4';
    default: return 'h-3.5 w-3.5';
  }
});

const badgeStyles = computed(() => {
  if (!config.value) return {};
  if (props.variant === 'outline') {
    return {
      borderColor: config.value.color,
      color: config.value.textColor,
    };
  }
  return {
    backgroundColor: config.value.backgroundColor,
    color: config.value.textColor,
    borderColor: `${config.value.color}20`,
  };
});
</script>

<template>
  <div v-if="config" :class="badgeClasses" :style="badgeStyles">
    <!-- 
      - showIcon prop이 true일 때만 아이콘을 렌더링합니다.
      - Vue의 동적 컴포넌트 <component :is="...">를 사용해 아이콘을 렌더링합니다.
    -->
    <component 
      v-if="showIcon"
      :is="config.icon" 
      :class="iconSizeClass" 
      :style="{ color: config.textColor }"
    />
    <span>{{ tech }}</span>
  </div>
  
  <div v-else :class="badgeClasses">
    <span>{{ tech }}</span>
  </div>
</template>