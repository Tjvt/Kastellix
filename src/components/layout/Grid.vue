<script setup lang="ts">
import { computed } from 'vue';

/**
 * A responsive grid layout component.
 * 
 * @description
 * Provides a simple wrapper around CSS Grid to create multi-column layouts.
 * 
 * @example
 * ```vue
 * <Grid :cols="3" gap="6">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 * ```
 * 
 * @slot default — Grid items
 */
interface Props {
  /** The number of columns. Supports numbers 1-12 or Tailwind string values. @default 1 */
  cols?: number | string;
  /** The gap between grid items. Supports Tailwind spacing scale values. @default 4 */
  gap?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  cols: 1,
  gap: 4,
});

const classes = computed(() => [
  'grid',
  `grid-cols-${props.cols}`,
  `gap-${props.gap}`,
]);
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
