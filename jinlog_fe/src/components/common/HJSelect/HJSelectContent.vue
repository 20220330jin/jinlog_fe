<script setup lang="ts">
import { SelectContent } from 'radix-vue';
import type { SelectContentEmits, SelectContentProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = withDefaults(
  defineProps<SelectContentProps & { class?: string }>(),
  {
    class: '',
    position: 'popper',
    sideOffset: 4,
  }
);
const emits = defineEmits<SelectContentEmits>();
</script>

<template>
  <SelectContent
    :class="[
      cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        props.class
      ),
    ]"
    v-bind="props"
    @close-auto-focus="emits('closeAutoFocus', $event)"
    @escape-key-down="emits('escapeKeyDown', $event)"
    @pointer-down-outside="emits('pointerDownOutside', $event)"
  >
    <slot />
  </SelectContent>
</template>
