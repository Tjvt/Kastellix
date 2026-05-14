<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
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
