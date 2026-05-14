<script setup lang="ts">
import { inject, type Ref } from 'vue';

/**
 * A content panel associated with a Tab.
 * 
 * @description
 * Only visible when its `value` matches the currently active tab in the parent `Tabs` component.
 * 
 * @example
 * ```vue
 * <TabPanel value="account">
 *   <p>Account details go here...</p>
 * </TabPanel>
 * ```
 * 
 * @slot default — The panel content
 */
interface Props {
  /** A unique identifier that links this panel to a specific `Tab`. */
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
