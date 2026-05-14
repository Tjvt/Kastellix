<script setup lang="ts">
interface Props {
  modelValue: string | number | boolean;
  label?: string;
  error?: string;
  direction?: 'horizontal' | 'vertical';
}

withDefaults(defineProps<Props>(), {
  direction: 'vertical',
});
</script>

<template>
  <div class="space-y-2">
    <label v-if="label" class="text-sm font-medium leading-none dark:text-gray-200">{{ label }}</label>
    <div
      :class="[
        'flex gap-4',
        direction === 'vertical' ? 'flex-col' : 'flex-row items-center'
      ]"
    >
      <slot></slot>
    </div>
    <p v-if="error" class="text-xs text-red-500 font-medium">{{ error }}</p>
  </div>
</template>
