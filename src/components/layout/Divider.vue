<script setup lang="ts">
interface Props {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
});
</script>

<template>
  <div
    :class="[
      'shrink-0 bg-gray-200 dark:bg-gray-800 relative flex items-center justify-center',
      orientation === 'horizontal' ? 'h-[1px] w-full my-4' : 'h-full w-[1px] mx-4'
    ]"
    role="separator"
  >
    <span
      v-if="label && orientation === 'horizontal'"
      class="absolute bg-white px-2 text-xs text-gray-500 dark:bg-gray-950 dark:text-gray-400"
    >
      {{ label }}
    </span>
  </div>
</template>
