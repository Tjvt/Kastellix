<script setup lang="ts">
import { inject, type Ref } from 'vue';

interface Props {
  value: string | number;
}

const props = defineProps<Props>();

const activeTab = inject<Ref<string | number>>('activeTab');
</script>

<template>
  <div v-if="activeTab === value" class="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:ring-offset-gray-950">
    <slot></slot>
  </div>
</template>
