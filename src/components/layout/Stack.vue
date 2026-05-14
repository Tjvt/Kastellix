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

const gapClassMap: Record<string, string> = {
  '0': 'gap-0',
  '0.5': 'gap-0.5',
  '1': 'gap-1',
  '1.5': 'gap-1.5',
  '2': 'gap-2',
  '2.5': 'gap-2.5',
  '3': 'gap-3',
  '3.5': 'gap-3.5',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '7': 'gap-7',
  '8': 'gap-8',
  '9': 'gap-9',
  '10': 'gap-10',
  '11': 'gap-11',
  '12': 'gap-12',
  '14': 'gap-14',
  '16': 'gap-16',
  '20': 'gap-20',
  '24': 'gap-24',
  '28': 'gap-28',
  '32': 'gap-32',
  '36': 'gap-36',
  '40': 'gap-40',
  '44': 'gap-44',
  '48': 'gap-48',
  '52': 'gap-52',
  '56': 'gap-56',
  '60': 'gap-60',
  '64': 'gap-64',
  '72': 'gap-72',
  '80': 'gap-80',
  '96': 'gap-96',
  px: 'gap-px',
};

const gapClass = computed(() => gapClassMap[String(props.gap)] || 'gap-0');

const classes = computed(() => [
  'flex',
  props.direction === 'row' ? 'flex-row' : 'flex-col',
  gapClass.value,
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
