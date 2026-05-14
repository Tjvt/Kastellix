<script setup lang="ts">
import { inject, type Ref } from 'vue';

/**
 * An individual tab trigger.
 * 
 * @description
 * When clicked, activates the corresponding `TabPanel`. Must be used inside `TabList`.
 * 
 * @example
 * ```vue
 * <Tab value="account">Account Settings</Tab>
 * ```
 * 
 * @slot default — The tab label
 */
interface Props {
  /** A unique identifier for the tab. Must match the `value` of the corresponding `TabPanel`. */
  value: string | number;
}

const props = defineProps<Props>();

const activeTab = inject<Ref<string | number>>('activeTab');
const selectTab = inject<(value: string | number) => void>('selectTab');

const onClick = () => {
  if (selectTab) {
    selectTab(props.value);
  }
};
</script>

<template>
  <button
    @click="onClick"
    :class="[
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950',
      activeTab === value ? 'bg-white text-gray-950 shadow-sm dark:bg-gray-950 dark:text-gray-50' : 'hover:bg-gray-200/50 hover:text-gray-900 dark:hover:bg-gray-800/50 dark:hover:text-gray-100'
    ]"
  >
    <slot></slot>
  </button>
</template>
