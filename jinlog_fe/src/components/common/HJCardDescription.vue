<script setup lang="ts">
import { useAttrs, computed } from 'vue';

const attrs = useAttrs();

const combineClasses = (...input: Array<string | undefined | null | boolean>) => {
  return input.filter(Boolean).join(' ');
};

const baseClasses = 'text-muted-foreground';

const combinedClasses = computed(() => {
  return combineClasses(baseClasses, attrs.class as string);
});
</script>

<template>
  <p data-slot="card-description" :class="combinedClasses" v-bind="attrs">
    <slot />
  </p>
</template>