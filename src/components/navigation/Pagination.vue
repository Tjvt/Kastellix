<script setup lang="ts">
import { computed } from 'vue';

/**
 * A pagination component for navigating multi-page content.
 * 
 * @description
 * Provides a set of controls to move between pages, including previous/next 
 * buttons and numbered page links with ellipsis for large ranges.
 * 
 * @example
 * ```vue
 * <Pagination 
 *   v-model:current-page="page" 
 *   :total-pages="10" 
 * />
 * ```
 */
interface Props {
  /** The current active page (1-indexed). */
  currentPage: number;
  /** The total number of pages available. */
  totalPages: number;
  /** The number of page links to show on either side of the current page. @default 1 */
  siblingCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  siblingCount: 1,
});

const emit = defineEmits<{
  /** Fires when the current page changes. Payload: the new page number. */
  'update:currentPage': [page: number];
}>();

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const paginationRange = computed(() => {
  const totalPageNumbers = props.siblingCount + 5;

  if (totalPageNumbers >= props.totalPages) {
    return range(1, props.totalPages);
  }

  const leftSiblingIndex = Math.max(props.currentPage - props.siblingCount, 1);
  const rightSiblingIndex = Math.min(props.currentPage + props.siblingCount, props.totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < props.totalPages - 2;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * props.siblingCount;
    let leftRange = range(1, leftItemCount);
    return [...leftRange, '...', props.totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * props.siblingCount;
    let rightRange = range(props.totalPages - rightItemCount + 1, props.totalPages);
    return [1, '...', ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [1, '...', ...middleRange, '...', props.totalPages];
  }
  
  return [];
});

const onPageChange = (page: number | string) => {
  if (typeof page === 'number') {
    emit('update:currentPage', page);
  }
};
</script>

<template>
  <nav class="flex items-center justify-center space-x-1" aria-label="Pagination">
    <button
      @click="onPageChange(currentPage - 1)"
      :disabled="currentPage === 1"
      class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>

    <template v-for="(page, index) in paginationRange" :key="index">
      <span
        v-if="page === '...'"
        class="inline-flex h-9 w-9 items-center justify-center text-sm"
      >
        ...
      </span>
      <button
        v-else
        @click="onPageChange(Number(page))"
        :class="[
          'inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors',
          currentPage === page
            ? 'bg-blue-600 text-white border-blue-600'
            : 'border-gray-200 bg-white hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:text-gray-100'
        ]"
      >
        {{ page }}
      </button>
    </template>

    <button
      @click="onPageChange(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </nav>
</template>
