<script setup lang="ts">
import { inject, computed, type Ref } from 'vue';

interface Props {
  value: string | number;
  title: string;
}

const props = defineProps<Props>();

const openItems = inject<Ref<(string | number)[]>>('openItems');
const toggleItem = inject<(value: string | number) => void>('toggleItem');

const isOpen = computed(() => openItems?.value.includes(props.value));

const onClick = () => {
  if (toggleItem) {
    toggleItem(props.value);
  }
};
</script>

<template>
  <div class="w-full">
    <button
      @click="onClick"
      class="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline"
      :aria-expanded="isOpen"
    >
      {{ title }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="['transition-transform duration-200', isOpen ? 'rotate-180' : '']"
      >
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="overflow-hidden text-sm transition-all pb-4"
    >
      <slot></slot>
    </div>
  </div>
</template>
