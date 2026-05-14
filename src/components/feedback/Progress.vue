<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  value?: number;
  max?: number;
  showValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  showValue: false,
});

const percentage = computed(() => {
  return Math.min(Math.max((props.value / props.max) * 100, 0), 100);
});
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between mb-1" v-if="showValue">
      <span class="text-sm font-medium dark:text-gray-200">Progress</span>
      <span class="text-sm font-medium dark:text-gray-200">{{ Math.round(percentage) }}%</span>
    </div>
    <div class="h-2 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-800">
      <div
        class="h-full bg-blue-600 transition-all duration-300 ease-in-out"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
  </div>
</template>
