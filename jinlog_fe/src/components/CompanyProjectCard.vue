<script setup lang="ts">
import HJCard from '@/components/common/HJCard.vue';
import HJCardHeader from '@/components/common/HJCardHeader.vue';
import { Building2, Calendar } from 'lucide-vue-next';
import HJTechBadge from '@/components/common/HJTechBadge.vue';
import HJCardContent from '@/components/common/HJCardContent.vue';

const props = withDefaults(defineProps<{
  project: {
    id: number;
    companyName: string;
    ProjectCompanyName: string;
    ProjectName: string;
    role: string;
    period: string;
    description: string;
    techStack: string[];
    achievements: string[];
  }
}>(), {});
</script>

<template>
  <HJCard class="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <HJCardHeader class="space-y-4">
      <div class="flex items-start justify-between">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <Building2 class="h-4 w-4 text-muted-foreground" />
            <span class="text-sm text-muted-foreground">{{ props.project.ProjectName }}</span>
          </div>
          <h3 class="group-hover:text-primary transition-colors">{{ props.project.role }}</h3>
        </div>
        <div class="flex items-center gap-1 text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
          <Calendar class="h-3 w-3" />
          {{ props.project.period }}
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        <div v-for="tech in props.project.techStack">
          <HJTechBadge :tech="tech" size="sm" class="hover:scale-105 transition-transform duration-200" />
        </div>
      </div>
    </HJCardHeader>
    <HJCardContent class="space-y-4">
      <p class="text-muted-foreground leading-relaxed">{{ props.project.description }}</p>
      <div v-if="props.project.achievements && props.project.achievements.length > 0" class="space-y-3">
        <h4 class="text-sm font-medium flex items-center gap-2">
          <span class="w-2 h-2 bg-primary rounded-full" />
          주요 성과
        </h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li v-for="achievement in props.project.achievements" class="flex items-start gap-3">
            <span class="text-primary mt-1.5 text-xs" />
            <span class="leading-relaxed">{{ achievement}}</span>
          </li>
        </ul>
      </div>
    </HJCardContent>
  </HJCard>
</template>

<style scoped>

</style>
