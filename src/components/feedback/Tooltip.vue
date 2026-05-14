<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'top',
});

const isVisible = ref(false);

const placementClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowClasses = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900',
};
</script>

<template>
  <div class="relative inline-block" @mouseenter="isVisible = true" @mouseleave="isVisible = false" @focusin="isVisible = true" @focusout="isVisible = false">
    <slot></slot>
    <div
      v-if="isVisible"
      :class="['absolute z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-sm whitespace-nowrap dark:bg-gray-700', placementClasses[placement]]"
      role="tooltip"
    >
      {{ content }}
      <div :class="['absolute border-4 border-transparent', arrowClasses[placement]]"></div>
    </div>
  </div>
</template>
