<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed border-gray-200 p-8 text-center dark:border-gray-800">
    <div class="mx-auto flex max-w-[420px] flex-col items-center justify-center">
      <div class="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
        <slot name="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </slot>
      </div>
      <h3 class="mt-4 text-lg font-semibold dark:text-gray-50">{{ title || 'No data found' }}</h3>
      <p class="mt-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
        {{ description || 'You haven\'t added anything yet.' }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>
