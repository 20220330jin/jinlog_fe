<script setup lang="ts">
import { useAttrs, computed } from 'vue';

const attrs = useAttrs();

const combineClasses = (...input: Array<string | undefined | null | boolean>) => {
  return input.filter(Boolean).join(' ');
};

const baseClasses = 'px-6 [&:last-child]:pb-6';

const combinedClasses = computed(() => {
  return combineClasses(baseClasses, attrs.class as string);
});
</script>

<template>
  <div data-slot="card-content" :class="combinedClasses" v-bind="attrs">
    <slot />
  </div>
</template>