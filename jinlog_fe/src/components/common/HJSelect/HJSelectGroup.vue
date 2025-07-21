<script setup lang="ts">
import { SelectGroup } from 'radix-vue';
import type { SelectGroupProps } from 'radix-vue';

const props = defineProps<SelectGroupProps>();
</script>

<template>
  <SelectGroup v-bind="props">
    <slot />
  </SelectGroup>
</template>
