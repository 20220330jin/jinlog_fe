<script setup lang="ts">
import { SelectLabel } from 'radix-vue';
import type { SelectLabelProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<SelectLabelProps & { class?: string }>();
</script>

<template>
  <SelectLabel :class="cn('p-2 font-semibold', props.class)">
    <slot />
  </SelectLabel>
</template>
