<script setup lang="ts">
/**
 * Footer
 *
 * @author hjkim
 */
</script>

<template>
  <footer class="bg-background shadow-inner">
    <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div class="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <router-link to="/" class="text-2xl font-bold text-foreground mb-2">
          <span>Jinlog</span>
        </router-link>
        <p class="text-muted-foreground text-sm">20220330jin@gmail.com</p>
      </div>
      <div class="hidden md:block" />
    </div>
    <div class="border-t border-border py-4 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p class="text-muted-foreground mb-2 md:mb-0">Jinlog. All rights reserved.</p>
        <p class="text-muted-foreground">Version 1.0.0</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
