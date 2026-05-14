<script setup lang="ts">
import { ref, provide, readonly } from 'vue';

/**
 * A container for grouping content into tabbed sections.
 * 
 * @description
 * Manages the active state and selection logic for child `Tab` components. 
 * Should be used in conjunction with `TabList`, `Tab`, and `TabPanel`.
 * 
 * @example
 * ```vue
 * <Tabs v-model="activeTab">
 *   <TabList>
 *     <Tab value="account">Account</Tab>
 *     <Tab value="password">Password</Tab>
 *   </TabList>
 *   <TabPanel value="account">Account settings...</TabPanel>
 *   <TabPanel value="password">Password settings...</TabPanel>
 * </Tabs>
 * ```
 * 
 * @slot default — TabList and TabPanel components
 */
interface Props {
  /** The value of the currently active tab. */
  modelValue?: string | number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  /** Fires when the active tab changes. Payload: the new tab value. */
  'update:modelValue': [value: string | number];
}>();

const activeTab = ref(props.modelValue);

const selectTab = (value: string | number) => {
  activeTab.value = value;
  emit('update:modelValue', value);
};

provide('activeTab', readonly(activeTab));
provide('selectTab', selectTab);
</script>

<template>
  <div class="w-full">
    <slot></slot>
  </div>
</template>
