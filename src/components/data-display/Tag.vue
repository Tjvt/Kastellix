<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  closeable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  closeable: false,
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const variantClasses = {
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

const classes = computed(() => [
  'inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors',
  variantClasses[props.variant],
]);
</script>

<template>
  <div :class="classes">
    <slot></slot>
    <button
      v-if="closeable"
      @click="emit('close')"
      class="rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  </div>
</template>
