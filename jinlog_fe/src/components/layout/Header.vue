<script setup lang="ts">
import { Moon, Menu } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
/**
 * 헤더
 *
 * - 다크모드
 *
 * @author hjkim
 */

/* router */
const router = useRouter();
/* 다크모드 상태 관리 */
const isDarkMode = ref(false);

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
    '(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDarkMode.value = true;
  } else {
    document.documentElement.classList.remove('dark');
    isDarkMode.value = false;
  }
});

/* 모바일 햄버거 메뉴 오픈 */
const toggleMobileMenu = () => {
  console.log('toggleMobileMenu');
};
/* 다크모드 변경 */
const toggleDarkMode = () => {
  console.log(isDarkMode.value);
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  }
};
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b
      bg-background/95 backdrop-blur
      supports-[backdrop-filter]:bg-background/60 shadow-md
      border-border">
    <div class="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- 로고 영역 -->
      <router-link to="/" class="text-xl font-bold text-foreground">
        <span>Jinlog</span>
      </router-link>
      <!-- Desktop Navigation -->
      <div class="flex items-center space-x-4">
        <nav class="hidden md:flex items-center space-x-4">
          <router-link to="/" class="text-muted-foreground hover:text-foreground">home</router-link>
          <router-link to="/about" class="text-muted-foreground  hover:text-foreground">About</router-link>
          <router-link to="/projects" class="text-muted-foreground  hover:text-foreground">Projects</router-link>
        </nav>
        <div class="flex items-center space-x-4">
          <button @click="toggleDarkMode" class="text-muted-foreground hover:text-foreground">
            <Moon class="size-5" />
          </button>
          <button @click="toggleMobileMenu" class="md:hidden text-muted-foreground">
            <Menu class="size-5" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
