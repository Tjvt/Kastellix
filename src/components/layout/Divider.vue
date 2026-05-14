<script setup lang="ts">
/**
 * A visual separator between content sections.
 * 
 * @description
 * Dividers help organize content by providing a visual break. 
 * Supports both horizontal and vertical orientations, and optional text labels for horizontal dividers.
 * 
 * @example
 * ```vue
 * <Divider label="OR" />
 * ```
 */
interface Props {
  /** The orientation of the divider. @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  /** Optional text to display in the center of a horizontal divider. */
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
