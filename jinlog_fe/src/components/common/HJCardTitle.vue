<script setup lang="ts">
import { useAttrs, computed } from 'vue';

const attrs = useAttrs();

const combineClasses = (...input: Array<string | undefined | null | boolean>) => {
  return input.filter(Boolean).join(' ');
};

const baseClasses = 'leading-none';

const combinedClasses = computed(() => {
  return combineClasses(baseClasses, attrs.class as string);
});
</script>

<template>
  <h4 data-slot="card-title" :class="combinedClasses" v-bind="attrs">
    <slot />
  </h4>
</template>