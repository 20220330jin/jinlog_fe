<script setup lang="ts">
import { useAttrs, computed } from 'vue';

const attrs = useAttrs();

const combineClasses = (...input: Array<string | undefined | null | boolean>) => {
  return input.filter(Boolean).join(' ');
};

const baseClasses =
  'col-start-2 row-span-2 row-start-1 self-start justify-self-end';

const combinedClasses = computed(() => {
  return combineClasses(baseClasses, attrs.class as string);
});
</script>

<template>
  <div data-slot="card-action" :class="combinedClasses" v-bind="attrs">
    <slot />
  </div>
</template>