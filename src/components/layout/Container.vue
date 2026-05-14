<script setup lang="ts">
import { computed } from 'vue';

/**
 * A centered container component for restricting content width.
 * 
 * @description
 * Used to wrap main page content and maintain consistent margins across different screen sizes.
 * 
 * @example
 * ```vue
 * <Container size="lg">
 *   <h1>Page Title</h1>
 *   <p>Content goes here...</p>
 * </Container>
 * ```
 * 
 * @slot default — The content to be contained
 */
interface Props {
  /** The maximum width of the container. @default 'xl' */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Whether the container should be centered horizontally. @default true */
  center?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl',
  center: true,
});

const sizeClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};
</script>

<template>
  <div
    :class="[
      'w-full px-4 md:px-6',
      sizeClasses[size],
      center ? 'mx-auto' : ''
    ]"
  >
    <slot></slot>
  </div>
</template>
