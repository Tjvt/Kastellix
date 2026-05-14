<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'text-blue-600',
});

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-3',
  xl: 'h-16 w-16 border-4',
};

const classes = computed(() => [
  'animate-spin rounded-full border-solid border-current border-t-transparent',
  sizeClasses[props.size],
  props.color,
]);
</script>

<template>
  <div :class="classes" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>
