<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  variant?: 'info' | 'success' | 'warning' | 'error';
  dismissable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  dismissable: false,
});

const isVisible = ref(true);

const variantClasses = {
  info: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
  success: 'bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800',
  error: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800',
};

const classes = computed(() => [
  'relative w-full rounded-lg border p-4 flex gap-3',
  variantClasses[props.variant],
]);

const dismiss = () => {
  isVisible.value = false;
};
</script>

<template>
  <div v-if="isVisible" :class="classes" role="alert">
    <div v-if="$slots.icon" class="shrink-0">
      <slot name="icon"></slot>
    </div>
    <div class="flex-1 text-sm">
      <slot></slot>
    </div>
    <button
      v-if="dismissable"
      @click="dismiss"
      class="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
      aria-label="Dismiss"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  </div>
</template>
