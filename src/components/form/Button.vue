<script setup lang="ts">
import { computed } from 'vue';

/**
 * Interactive button component for actions and triggers.
 * 
 * @description
 * Supports multiple visual variants, sizes, and states including loading and disabled.
 * Automatically handles loading spinner and icon placement.
 * 
 * @example
 * ```vue
 * <Button variant="primary" size="md" @click="handleClick">
 *   Submit
 * </Button>
 * ```
 * 
 * @slot default — The button label or content
 * @slot icon — Optional icon to display before the label (hidden when loading)
 */
interface Props {
  /** The visual style of the button. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  /** The size of the button. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is in a loading state. Shows a spinner and disables interaction. @default false */
  loading?: boolean;
  /** Whether the button is disabled. @default false */
  disabled?: boolean;
  /** The HTML button type. @default 'button' */
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  type: 'button',
});

const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
  destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600',
};

const sizeClasses = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

const classes = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
]);
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="classes"
  >
    <span v-if="loading" class="mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" aria-hidden="true"></span>
    <slot name="icon" v-if="!loading"></slot>
    <span :class="{ 'ml-2': $slots.icon && !loading }">
      <slot></slot>
    </span>
  </button>
</template>
