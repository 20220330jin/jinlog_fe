<script setup lang="ts">
import { computed, useAttrs } from 'vue';

interface CardProps {

}

const props = defineProps<CardProps>();
const attrs = useAttrs();

const combineClasses = (...input: Array<string | undefined | null | boolean>) => {
  return input.filter(Boolean).join('');
};
const combinedClasses = computed(() => {
  const baseClasses = 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border;';
  return combineClasses(baseClasses, attrs.class as string);
});
</script>

<template>
  <div data-slot="card" :class="combinedClasses" v-bind="attrs">
    <slot />
  </div>
</template>

<style scoped>

</style>
