<script setup lang="ts">
import { useAttrs, computed } from 'vue';

const attrs = useAttrs();

const combineClasses = (...input: Array<string | undefined | null | boolean>) => {
  return input.filter(Boolean).join(' ');
};

const baseClasses =
  '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6';

const combinedClasses = computed(() => {
  return combineClasses(baseClasses, attrs.class as string);
});
</script>

<template>
  <div data-slot="card-header" :class="combinedClasses" v-bind="attrs">
    <slot />
  </div>
</template>