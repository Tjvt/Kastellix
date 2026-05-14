<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  cols?: number | string;
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
