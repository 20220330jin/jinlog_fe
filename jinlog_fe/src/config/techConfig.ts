// /src/config/techConfig.ts

import type { Component } from 'vue';
import { Code, Server, Database, Wrench, Cloud } from 'lucide-vue-next';
import {
  ReactIcon, TypeScriptIcon, JavaScriptIcon, NextDotjsIcon, VueDotjsIcon, TailwindCssIcon,
  SassIcon, NodeDotjsIcon, PythonIcon, ExpressIcon, FastApiIcon, SpringBootIcon,
  PostgreSqlIcon, MongoDbIcon, RedisIcon, MySqlIcon, PrismaIcon, DockerIcon, GitIcon,
  GitHubActionsIcon, WebpackIcon, ViteIcon, NuxtIcon, AcerIcon,
  GraphQlIcon, JestIcon, SupabaseIcon, MapboxIcon, FirebaseIcon, ChartDotjsIcon,
  PwaIcon, MicroEditorIcon, KubernetesIcon, TypeOrmIcon,
} from 'vue3-simple-icons';

interface TechConfig {
  icon: Component;
  color: string;
  backgroundColor: string;
  textColor: string;
}

export const techConfigs: Record<string, TechConfig> = {
  'React': { icon: ReactIcon, color: '#61DAFB', backgroundColor: 'rgba(97, 218, 251, 0.1)', textColor: '#61DAFB' },
  'TypeScript': { icon: TypeScriptIcon, color: '#3178C6', backgroundColor: 'rgba(49, 120, 198, 0.1)', textColor: '#3178C6' },
  'JavaScript': { icon: JavaScriptIcon, color: '#F7DF1E', backgroundColor: 'rgba(247, 223, 30, 0.1)', textColor: '#D4AF00' },
  'Next.js': { icon: NextDotjsIcon, color: '#000000', backgroundColor: 'rgba(0, 0, 0, 0.1)', textColor: '#000000' },
  'Vue.js': { icon: VueDotjsIcon, color: '#4FC08D', backgroundColor: 'rgba(79, 192, 141, 0.1)', textColor: '#4FC08D' },
  'Nuxt.js': { icon: NuxtIcon, color: '#00DC82', backgroundColor: 'rgba(0, 220, 130, 0.1)', textColor: '#00DC82' },
  'TailwindCSS': { icon: TailwindCssIcon, color: '#06B6D4', backgroundColor: 'rgba(6, 182, 212, 0.1)', textColor: '#06B6D4' },
  'Sass': { icon: SassIcon, color: '#CC6699', backgroundColor: 'rgba(204, 102, 153, 0.1)', textColor: '#CC6699' },
  'Node.js': { icon: NodeDotjsIcon, color: '#339933', backgroundColor: 'rgba(51, 153, 51, 0.1)', textColor: '#339933' },
  'Python': { icon: PythonIcon, color: '#3776AB', backgroundColor: 'rgba(55, 118, 171, 0.1)', textColor: '#3776AB' },
  'Java': { icon: Code, color: '#ED8B00', backgroundColor: 'rgba(237, 139, 0, 0.1)', textColor: '#ED8B00' },
  'Express': { icon: ExpressIcon, color: '#000000', backgroundColor: 'rgba(0, 0, 0, 0.1)', textColor: '#000000' },
  'FastAPI': { icon: FastApiIcon, color: '#009688', backgroundColor: 'rgba(0, 150, 136, 0.1)', textColor: '#009688' },
  'Spring Boot': { icon: SpringBootIcon, color: '#6DB33F', backgroundColor: 'rgba(109, 179, 63, 0.1)', textColor: '#6DB33F' },
  'PostgreSQL': { icon: PostgreSqlIcon, color: '#336791', backgroundColor: 'rgba(51, 103, 145, 0.1)', textColor: '#336791' },
  'MongoDB': { icon: MongoDbIcon, color: '#47A248', backgroundColor: 'rgba(71, 162, 72, 0.1)', textColor: '#47A248' },
  'Redis': { icon: RedisIcon, color: '#DC382D', backgroundColor: 'rgba(220, 56, 45, 0.1)', textColor: '#DC382D' },
  'MySQL': { icon: MySqlIcon, color: '#4479A1', backgroundColor: 'rgba(68, 121, 161, 0.1)', textColor: '#4479A1' },
  'Oracle': { icon: AcerIcon, color: '#F80000', backgroundColor: 'rgba(248, 0, 0, 0.1)', textColor: '#F80000' },
  'JPA': { icon: Database, color: '#AD6E2F', backgroundColor: 'rgba(173, 110, 47, 0.1)', textColor: '#AD6E2F' },
  'QueryDSL': { icon: Database, color: '#599766', backgroundColor: 'rgba(89, 151, 102, 0.1)', textColor: '#599766' },
  'Prisma': { icon: PrismaIcon, color: '#2D3748', backgroundColor: 'rgba(45, 55, 72, 0.1)', textColor: '#2D3748' },
  'TypeORM': { icon: TypeOrmIcon, color: '#FE0803', backgroundColor: 'rgba(254, 8, 3, 0.1)', textColor: '#FE0803' },
  'Docker': { icon: DockerIcon, color: '#2496ED', backgroundColor: 'rgba(36, 150, 237, 0.1)', textColor: '#2496ED' },
  'AWS': { icon: Cloud, color: '#FF9900', backgroundColor: 'rgba(255, 153, 0, 0.1)', textColor: '#FF9900' },
  'Git': { icon: GitIcon, color: '#F05032', backgroundColor: 'rgba(240, 80, 50, 0.1)', textColor: '#F05032' },
  'GitHub Actions': { icon: GitHubActionsIcon, color: '#2088FF', backgroundColor: 'rgba(32, 136, 255, 0.1)', textColor: '#2088FF' },
  'Webpack': { icon: WebpackIcon, color: '#8DD6F9', backgroundColor: 'rgba(141, 214, 249, 0.1)', textColor: '#1C78C0' },
  'Vite': { icon: ViteIcon, color: '#646CFF', backgroundColor: 'rgba(100, 108, 255, 0.1)', textColor: '#646CFF' },
  'GraphQL': { icon: GraphQlIcon, color: '#E10098', backgroundColor: 'rgba(225, 0, 152, 0.1)', textColor: '#E10098' },
  'Jest': { icon: JestIcon, color: '#C21325', backgroundColor: 'rgba(194, 19, 37, 0.1)', textColor: '#C21325' },
  'Supabase': { icon: SupabaseIcon, color: '#3ECF8E', backgroundColor: 'rgba(62, 207, 142, 0.1)', textColor: '#3ECF8E' },
  'Mapbox': { icon: MapboxIcon, color: '#000000', backgroundColor: 'rgba(0, 0, 0, 0.1)', textColor: '#000000' },
  'Firebase': { icon: FirebaseIcon, color: '#FFCA28', backgroundColor: 'rgba(255, 202, 40, 0.1)', textColor: '#FF8F00' },
  'Chart.js': { icon: ChartDotjsIcon, color: '#FF6384', backgroundColor: 'rgba(255, 99, 132, 0.1)', textColor: '#FF6384' },
  'PWA': { icon: PwaIcon, color: '#5A0FC8', backgroundColor: 'rgba(90, 15, 200, 0.1)', textColor: '#5A0FC8' },
  'Monaco Editor': { icon: MicroEditorIcon, color: '#0078D4', backgroundColor: 'rgba(0, 120, 212, 0.1)', textColor: '#0078D4' },
  'DevOps': { icon: Cloud, color: '#326CE5', backgroundColor: 'rgba(50, 108, 229, 0.1)', textColor: '#326CE5' },
  'Kubernetes': { icon: KubernetesIcon, color: '#326CE5', backgroundColor: 'rgba(50, 108, 229, 0.1)', textColor: '#326CE5' },
  'Frontend': { icon: Code, color: '#61DAFB', backgroundColor: 'rgba(97, 218, 251, 0.1)', textColor: '#61DAFB' },
  'Backend': { icon: Server, color: '#339933', backgroundColor: 'rgba(51, 153, 51, 0.1)', textColor: '#339933' },
  'Best Practices': { icon: Wrench, color: '#4A5568', backgroundColor: 'rgba(74, 85, 104, 0.1)', textColor: '#4A5568' },
  '여행': { icon: Code, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', textColor: '#10B981' },
  '제주도': { icon: Code, color: '#059669', backgroundColor: 'rgba(5, 150, 105, 0.1)', textColor: '#059669' },
  '부산': { icon: Code, color: '#0891B2', backgroundColor: 'rgba(8, 145, 178, 0.1)', textColor: '#0891B2' },
  '일본': { icon: Code, color: '#DC2626', backgroundColor: 'rgba(220, 38, 38, 0.1)', textColor: '#DC2626' },
  '교토': { icon: Code, color: '#B91C1C', backgroundColor: 'rgba(185, 28, 28, 0.1)', textColor: '#B91C1C' },
  '벚꽃': { icon: Code, color: '#EC4899', backgroundColor: 'rgba(236, 72, 153, 0.1)', textColor: '#EC4899' },
  '맛집': { icon: Code, color: '#F59E0B', backgroundColor: 'rgba(245, 158, 11, 0.1)', textColor: '#F59E0B' },
  '카페': { icon: Code, color: '#92400E', backgroundColor: 'rgba(146, 64, 14, 0.1)', textColor: '#92400E' },
  '문화': { icon: Code, color: '#7C3AED', backgroundColor: 'rgba(124, 58, 237, 0.1)', textColor: '#7C3AED' },
  '사진': { icon: Code, color: '#8B5CF6', backgroundColor: 'rgba(139, 92, 246, 0.1)', textColor: '#8B5CF6' },
  '일상': { icon: Code, color: '#6366F1', backgroundColor: 'rgba(99, 102, 241, 0.1)', textColor: '#6366F1' },
  '회고': { icon: Code, color: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', textColor: '#4F46E5' },
  '목표': { icon: Code, color: '#059669', backgroundColor: 'rgba(5, 150, 105, 0.1)', textColor: '#059669' },
  '성장': { icon: Code, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', textColor: '#10B981' },
  '재택근무': { icon: Code, color: '#0891B2', backgroundColor: 'rgba(8, 145, 178, 0.1)', textColor: '#0891B2' },
  '루틴': { icon: Code, color: '#0284C7', backgroundColor: 'rgba(2, 132, 199, 0.1)', textColor: '#0284C7' },
  '워라밸': { icon: Code, color: '#0369A1', backgroundColor: 'rgba(3, 105, 161, 0.1)', textColor: '#0369A1' }
};
