<script setup lang="ts">
import { computed } from 'vue';

/**
 * A small status indicator or label.
 * 
 * @description
 * Badges are used to highlight a status, category, or count.
 * 
 * @example
 * ```vue
 * <Badge variant="success">Active</Badge>
 * ```
 * 
 * @slot default — The badge label
 */
interface Props {
  /** The visual variant of the badge. @default 'default' */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  /** The size of the badge. @default 'md' */
  size?: 'sm' | 'md';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
});

const variantClasses = {
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-0.5 text-xs',
};

const classes = computed(() => [
  'inline-flex items-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  variantClasses[props.variant],
  sizeClasses[props.size],
]);
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
