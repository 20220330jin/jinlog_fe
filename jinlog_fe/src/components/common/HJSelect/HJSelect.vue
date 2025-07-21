<script setup lang="ts">
import { SelectRoot } from 'radix-vue';
import type { SelectRootEmits, SelectRootProps } from 'radix-vue';

const props = defineProps<SelectRootProps>();
const emits = defineEmits<SelectRootEmits>();
</script>

<template>
  <SelectRoot v-bind="props" @update:model-value="emits('update:modelValue', $event)">
    <slot />
  </SelectRoot>
</template>
