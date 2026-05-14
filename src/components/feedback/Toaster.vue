<script setup lang="ts">
import { useToast } from '../../composables/useToast';

const { toasts, remove } = useToast();

const variantClasses = {
  info: 'bg-blue-600 text-white',
  success: 'bg-green-600 text-white',
  warning: 'bg-yellow-500 text-white',
  error: 'bg-red-600 text-white',
};
</script>

<template>
  <div class="fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-xs">
    <TransitionGroup
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="['p-4 rounded-lg shadow-lg flex items-center justify-between pointer-events-auto', variantClasses[toast.variant || 'info']]"
      >
        <span class="text-sm font-medium">{{ toast.message }}</span>
        <button @click="remove(toast.id)" class="ml-4 opacity-70 hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>
