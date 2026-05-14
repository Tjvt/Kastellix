<script setup lang="ts">
interface Props {
  disabled?: boolean;
  danger?: boolean;
}

defineProps<Props>();
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'flex w-full items-center px-4 py-2 text-sm transition-colors focus:bg-gray-100 focus:outline-none dark:focus:bg-gray-800',
      danger ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-200',
      disabled ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    ]"
  >
    <div v-if="$slots.icon" class="mr-2 h-4 w-4 shrink-0">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>
