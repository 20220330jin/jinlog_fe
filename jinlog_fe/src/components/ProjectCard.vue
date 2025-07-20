<script setup lang="ts">
import HJCard from '@/components/common/HJCard.vue';
import HJCardHeader from '@/components/common/HJCardHeader.vue';
import { Building2 } from 'lucide-vue-next';

const props = withDefaults(defineProps<{
}>(), {
})
</script>

<template>
  <HJCard>
    <HJCardHeader>
      <div>
        <div>
          <div>
            <Building2 />
          </div>
        </div>
      </div>
    </HJCardHeader>
  </HJCard>
</template>

<style scoped>

</style>
