<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useAttrs } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
  modelValue?: string | number;
}>();

const emits = defineEmits(['update:modelValue']);

const attrs = useAttrs();
</script>

<template>
  <textarea
    :class="
      cn(
        'flex min-h-[60px] w-full rounded-md border border-input bg-gray-100 dark:bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
    v-bind="attrs"
    :value="props.modelValue"
    @input="emits('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>
