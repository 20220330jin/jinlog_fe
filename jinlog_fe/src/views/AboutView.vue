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
    id: 1,
    date: '2020-01-01',
    companyName: '회사 A',
    description: '회사 A에서 프론트엔드 개발자로 일했습니다.',
  },
  {
    id: 2,
    date: '2021-06-01',
    companyName: '회사 B',
    description: '회사 B에서 백엔드 개발자로 일했습니다.',
  },
  {
    id: 3,
    date: '2022-09-01',
    companyName: '회사 C',
    description: '회사 C에서 풀스택 개발자로 일했습니다.',
  },
];

const companyProjects = [
  {
    id: 1,
    companyName: '아이시프트',
    ProjectCompanyName: '현대 글로비스',
    ProjectName: '현대 글로비스 글로벌 오토벨 중고차 수출 플랫폼 구축',
    role: '풀스택 개발자',
    period: '2021-04-01 ~ 2022-01-30',
    description: '아이시프트에서 풀스택 개발자로 일하며 다양한 웹 애플리케이션을 개발했습니다.',
    techStack: ['Vue.js', 'Spring Boot', 'Java'],
    achievements: [
      '사용자 친화적인 UI/UX 설계 및 구현',
      'RESTful API 설계 및 구현',
    ],
  },
  {
    id: 2,
    companyName: '아이시프트',
    ProjectCompanyName: '현대 글로비스',
    ProjectName: '현대 글로비스 글로벌 오토벨 중고차 수출 플랫폼 운영 및 유지보수',
    role: '풀스택 개발자',
    period: '2022-02-01 ~ 2022-10-30',
    description: '아이시프트에서 풀스택 개발자로 일하며 다양한 웹 애플리케이션을 개발했습니다.',
    techStack: ['Vue.js', 'Spring Boot', 'Java'],
    achievements: [
      '사용자 친화적인 UI/UX 설계 및 구현',
      'RESTful API 설계 및 구현',
    ],
  },
];
const personalProjects = [];
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
    <section class="mb-16">
      <h2 class="text-3xl text-center mb-8">경력</h2>
      <div class="max-w-3xl mx-auto">
        <div v-for="item in timeline">
          <div :key="item.id" class="flex gap-6 pb-8 last:pb-0 group">
            <div class="flex flex-col items-center">
              <div class="w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
              <div v-if="item.id < timeline.length"
                   class="w-px bg-border flex-1 mt-2 group-hover:bg-primary/50 transition-colors duration-300" />
            </div>
            <div class="flex-1 pb-8">
              <div class="text-sm text-muted-foreground mb-1 bg-muted px-2 py-1 rounded-md inline-block">
                {{ item.date }}
              </div>
              <h3 class="mb-1 group-hover:text-primary transition-colors duration-300">
                {{ item.companyName }}
              </h3>
              <p class="text-muted-foreground">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 프로젝트 경험 -->
    <section class="mb-16">
      <h2 class="text-3xl text-center mb-8">프로젝트 경험</h2>
      <div class="mb-12">
        <h3 class="text-xl mb-6">기업 프로젝트</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div v-for="companyProject in companyProjects">
            <CompanyProjectCard :key="companyProject.id" :project="companyProject" />
          </div>
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
