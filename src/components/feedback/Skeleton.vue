<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'text' | 'avatar' | 'card' | 'image';
  width?: string;
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
