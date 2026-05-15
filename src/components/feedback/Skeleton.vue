<script setup lang="ts">
import { computed } from 'vue';

/**
 * A placeholder component for loading states.
 * 
 * @description
 * Skeletons are used to represent the shape of content that is still loading, 
 * reducing perceived latency.
 * 
 * @example
 * ```vue
 * <Skeleton variant="avatar" />
 * <Skeleton variant="text" width="60%" />
 * ```
 */
interface Props {
  /** The type of content to represent. @default 'text' */
  variant?: 'text' | 'avatar' | 'card' | 'image';
  /** Custom width for the skeleton. */
  width?: string;
  /** Custom height for the skeleton. */
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'text',
});

const classes = computed(() => [
  'animate-pulse bg-gray-200 dark:bg-gray-800',
  props.variant === 'avatar' ? 'rounded-full' : 'rounded-md',
  props.variant === 'text' ? 'h-3 w-full' : '',
  props.variant === 'avatar' ? 'h-12 w-12' : '',
  props.variant === 'card' ? 'h-40 w-full' : '',
  props.variant === 'image' ? 'h-64 w-full' : '',
]);

const style = computed(() => ({
  width: props.width,
  height: props.height,
}));
</script>

<template>
  <div :class="classes" :style="style"></div>
</template>
