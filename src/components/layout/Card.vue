<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
  shadow: 'md',
});

const shadowClasses = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};
</script>

<template>
  <div :class="['rounded-xl border border-gray-200 bg-white text-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50', shadowClasses[shadow]]">
    <div v-if="$slots.header" class="flex flex-col space-y-1.5 p-6 border-b border-gray-100 dark:border-gray-800">
      <slot name="header"></slot>
    </div>
    <div class="p-6">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="flex items-center p-6 pt-0 border-t border-gray-100 dark:border-gray-800 pt-6">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
