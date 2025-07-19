<script setup lang="ts">
import { PenTool, Github, Linkedin, Mail } from 'lucide-vue-next';
import HJButton from '../common/HJButton.vue';
/**
 * Footer
 *
 * @author hjkim
 */
</script>

<template>
  <footer class="border-t bg-muted/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <PenTool class="h-5 w-5" />
            <span class="text-lg">Jinlog</span>
          </div>
          <p class="text-muted-foreground">개발, 여행, 그리고 소소항 일상..</p>
        </div>
        <div class="space-y-4">
          <h3>연락처</h3>
          <div class="space-y-2 text-muted-foreground">
            <p>이메일: 20220330jin@gmail.com</p>
            <p>위치: Seoul, Republic of Korea.</p>
          </div>
        </div>
        <div class="space-y-4">
          <h3>소셜 링크</h3>
          <div class="flex gap-2">
            <HJButton variant="outline">
              <Github class="h-4 w-4" />
            </HJButton>
            <HJButton variant="outline">
              <Linkedin class="h-4 w-4" />
            </HJButton>
            <HJButton variant="outline">
              <Mail class="h-4 w-4" />
            </HJButton>
          </div>
        </div>
      </div>
      <div class="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-muted-foreground text-sm">
          © 2025 Jinlog. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
