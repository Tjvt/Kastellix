<script setup lang="ts">
interface Props {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="w-full space-y-1.5">
    <label
      v-if="label"
      class="text-sm font-medium leading-none dark:text-gray-200"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <div class="relative">
      <slot></slot>
    </div>

    <p v-if="error" class="text-xs text-red-500 font-medium">
      <slot name="error">{{ error }}</slot>
    </p>
    <p v-else-if="hint" class="text-xs text-gray-500 dark:text-gray-400">
      <slot name="hint">{{ hint }}</slot>
    </p>
  </div>
</template>
