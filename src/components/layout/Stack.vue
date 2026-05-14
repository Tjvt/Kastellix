<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  direction?: 'row' | 'col';
  gap?: number | string;
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'col',
  gap: 4,
  align: 'stretch',
  justify: 'start',
  wrap: false,
});

const classes = computed(() => [
  'flex',
  props.direction === 'row' ? 'flex-row' : 'flex-col',
  `gap-${props.gap}`,
  {
    'items-start': props.align === 'start',
    'items-center': props.align === 'center',
    'items-end': props.align === 'end',
    'items-baseline': props.align === 'baseline',
    'items-stretch': props.align === 'stretch',
    'justify-start': props.justify === 'start',
    'justify-center': props.justify === 'center',
    'justify-end': props.justify === 'end',
    'justify-between': props.justify === 'between',
    'justify-around': props.justify === 'around',
    'justify-evenly': props.justify === 'evenly',
    'flex-wrap': props.wrap,
  }
]);
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
