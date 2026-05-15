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

const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold tracking-tight transition-all duration-200 ease-swift-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-slate-950';

const variantClasses = {
  primary: 'bg-brand-600 text-white shadow-soft hover:bg-brand-700',
  secondary: 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  destructive: 'bg-rose-600 text-white shadow-soft hover:bg-rose-700',
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
    <span v-if="loading" class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true"></span>
    <slot name="icon" v-if="!loading"></slot>
    <span :class="{ 'ml-2': $slots.icon && !loading }">
      <slot></slot>
    </span>
    <span v-if="loading" class="sr-only">Loading</span>
  </button>
</template>
