<script setup lang="ts">
import { MapPin, Calendar, Heart, Github, Linkedin, Mail } from 'lucide-vue-next';
import HJButton from '@/components/common/HJButton.vue';
import HJCard from '@/components/common/HJCard.vue';
import CompanyProjectCard from '@/components/CompanyProjectCard.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import HJCardContent from '@/components/common/HJCardContent.vue';
import TechBadge from '@/components/TechBadge.vue';
import HJTechBadge from '@/components/common/HJTechBadge.vue';

/**
 * 자기소개 페이지
 *
 * @author hjkim
 */

const skills = {
  frontend: ['TypeScript', 'TailwindCSS', 'Vue.js', 'Nuxt.js', 'React'],
  backend: ['Java', 'Spring Boot'],
  database: ['PostgreSQL', 'MySQL', 'Oracle', 'JPA', 'QueryDSL'],
  tools: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Webpack', 'Vite'],
};
const timeline = [
  {
    date: '2020-01-01',
    companyName: '회사 A',
    description: '회사 A에서 프론트엔드 개발자로 일했습니다.',
  },
  {
    date: '2021-06-01',
    companyName: '회사 B',
    description: '회사 B에서 백엔드 개발자로 일했습니다.',
  },
  {
    date: '2022-09-01',
    companyName: '회사 C',
    description: '회사 C에서 풀스택 개발자로 일했습니다.',
  },
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 해더 소개  -->
    <section class="text-center mb-16">
      <div class="mb-8">
        <h1 class="text-4xl mb-4">안녕하세요</h1>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">풀스택 개발자입니다.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-6 mb-8">
        <div class="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
          <MapPin class="h-4 w-4" />
          서울, 대한민국
        </div>
        <div class="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
          <Calendar class="h-4 w-4" />
          3년 경력
        </div>
        <div class="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
          <Heart class="h-4 w-4" />
          개발, 여행
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div class="flex gap-4">
          <HJButton variant="outline" size="icon" class="hover:scale-110 transition-transform duration-200">
            <Github class="h-4 w-4" />
          </HJButton>
          <HJButton variant="outline" size="icon" class="hover:scale-110 transition-transform duration-200">
            <Linkedin class="h-4 w-4" />
          </HJButton>
          <HJButton variant="outline" size="icon" class="hover:scale-110 transition-transform duration-200">
            <Mail class="h-4 w-4" />
          </HJButton>
        </div>
      </div>
    </section>

    <!-- 기술 스택 -->
    <section class="mb-16">
      <h2 class="text-3xl text-center mb-8">기술 스택</h2>
      <div class="grid grid-cols-1 md:grid-cols2 lg:grid-cols-4 gap-6">
        <HJCard class="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <HJCardContent class="p-6 text-center">
            <div class="text-2xl mb-4">🎨</div>
            <h3 class="mb-4 text-lg">Frontend</h3>
            <div class="flex flex-wrap gap-2 justify-center">
              <div v-for="skill in skills.frontend">
                <HJTechBadge :key="skill" :tech="skill" size="sm"
                             class="hover:scale-105 transition-transform duration-200" />
              </div>
            </div>
          </HJCardContent>
        </HJCard>
        <HJCard class="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <HJCardContent class="p-6 text-center">
            <div class="text-2xl mb-4">⚙️</div>
            <h3 class="mb-4 text-lg">Backend</h3>
            <div class="flex flex-wrap gap-2 justify-center">
              <div v-for="skill in skills.backend">
                <HJTechBadge :key="skill" :tech="skill" size="sm"
                             class="hover:scale-105 transition-transform duration-200" />
              </div>
            </div>
          </HJCardContent>
        </HJCard>
        <HJCard class="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <HJCardContent class="p-6 text-center">
            <div class="text-2xl mb-4">🗄️</div>
            <h3 class="mb-4 text-lg">Database</h3>
            <div class="flex flex-wrap gap-2 justify-center">
              <div v-for="skill in skills.database">
                <HJTechBadge :key="skill" :tech="skill" size="sm"
                             class="hover:scale-105 transition-transform duration-200" />
              </div>
            </div>
          </HJCardContent>
        </HJCard>
        <HJCard class="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <HJCardContent class="p-6 text-center">
            <div class="text-2xl mb-4">🛠️</div>
            <h3 class="mb-4 text-lg">Tools</h3>
            <div class="flex flex-wrap gap-2 justify-center">
              <div v-for="skill in skills.tools">
                <HJTechBadge :key="skill" :tech="skill" size="sm"
                             class="hover:scale-105 transition-transform duration-200" />
              </div>
            </div>
          </HJCardContent>
        </HJCard>
      </div>
    </section>

    <!-- 경력 타임라인  -->
    <section>
      <h2>경력</h2>
      <div>
        <div v-for="item in timeline">
          <div>
            <div>
              <div />
            </div>
            <div>
              <div>
                {{ item.date }}
              </div>
              <h3>
                {{ item.companyName }}
              </h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 프로젝트 경험 -->
    <section>
      <h2>프로젝트 경험</h2>
      <div>
        <h3>기업 프로젝트</h3>
        <div>
          <CompanyProjectCard />
        </div>
      </div>
      <div>
        <h3>개인 프로젝트</h3>
        <div>
          <ProjectCard />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
