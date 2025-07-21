<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useAttrs } from 'vue';

defineOptions({
  inheritAttrs: false,
});

// 1. 'modelValue' prop을 정의합니다.
const props = defineProps<{
  class?: string;
  modelValue?: string | number;
}>();

// 2. 'update:modelValue' 이벤트를 발생시킨다고 선언합니다.
const emits = defineEmits(['update:modelValue']);

const attrs = useAttrs();
</script>

<template>
  <input
    :class="cn(
      'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-gray-100 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      props.class
    )"
    v-bind="attrs"
    :value="props.modelValue"
    @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
