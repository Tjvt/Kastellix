<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const initials = computed(() => {
  if (!props.name) return '';
  return props.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

const sizeClasses = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
};

const statusClasses = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
};

const statusSizeClasses = {
  xs: 'h-1.5 w-1.5',
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
  xl: 'h-4 w-4',
};
</script>

<template>
  <div class="relative inline-block">
    <div
      :class="[
        'flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800',
        sizeClasses[size]
      ]"
    >
      <img
        v-if="src"
        :src="src"
        :alt="alt || name"
        class="aspect-square h-full w-full object-cover"
      />
      <span v-else class="font-medium text-gray-600 dark:text-gray-300">
        {{ initials }}
      </span>
    </div>
    <span
      v-if="status"
      :class="[
        'absolute bottom-0 right-0 rounded-full border-2 border-white dark:border-gray-950',
        statusClasses[status],
        statusSizeClasses[size]
      ]"
    ></span>
  </div>
</template>
