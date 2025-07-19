<script setup lang="ts">
import { computed, onMounted } from 'vue';

/**
 * 공통 버튼 컴포넌트
 *
 * @author hjkim
 */
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  size: 'default',
});

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition -colors disabled:pointer-events-none disabled:opacity-50';
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };
  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
  };
  return `${base} ${variantClasses[props.variant!]} ${sizeClasses[props.size!]}`;
});

onMounted(() => {
  console.log('HJButton mounted with variant:', props.variant, 'and size:', props.size);
});

</script>

<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<style scoped>

</style>
