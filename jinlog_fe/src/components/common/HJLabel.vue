<script setup lang="ts">
import { Label } from 'radix-vue';
import type { LabelProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<LabelProps & { class?: string }>();
</script>

<template>
  <Label
    :class="
      cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class
      )
    "
  >
    <slot />
  </Label>
</template>
