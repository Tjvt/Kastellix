<script setup lang="ts">
import { computed } from 'vue';

/**
 * An animated loading spinner component.
 * 
 * @description
 * Used to indicate a background process or loading state.
 * 
 * @example
 * ```vue
 * <Spinner size="lg" color="text-red-500" />
 * ```
 */
interface Props {
  /** The size of the spinner. @default 'md' */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** The color of the spinner. Supports Tailwind text color classes. @default 'text-brand-600' */
  color?: string;
  /** Accessible label announced by screen readers. @default 'Loading' */
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'text-brand-600',
  label: 'Loading',
});

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-3',
  xl: 'h-16 w-16 border-4',
};

const classes = computed(() => [
  'animate-spin rounded-full border-solid border-current border-r-transparent',
  sizeClasses[props.size],
  props.color,
]);
</script>

<template>
  <div :class="classes" role="status">
    <span class="sr-only">{{ label }}</span>
  </div>
</template>
