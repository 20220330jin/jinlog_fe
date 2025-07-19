<script setup lang="ts">
import { useAttrs, computed } from 'vue';

const attrs = useAttrs();

const combineClasses = (...input: Array<string | undefined | null | boolean>) => {
  return input.filter(Boolean).join(' ');
};

const baseClasses = 'flex items-center px-6 pb-6 [.border-t]:pt-6';

const combinedClasses = computed(() => {
  return combineClasses(baseClasses, attrs.class as string);
});
</script>

<template>
  <div data-slot="card-footer" :class="combinedClasses" v-bind="attrs">
    <slot />
  </div>
</template>