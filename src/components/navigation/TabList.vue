<script setup lang="ts">
/**
 * A container for Tab components.
 * 
 * @description
 * Provides the visual styling for the tab bar. Must be used inside `Tabs`.
 * 
 * @example
 * ```vue
 * <TabList>
 *   <Tab value="1">Tab 1</Tab>
 *   <Tab value="2">Tab 2</Tab>
 * </TabList>
 * ```
 * 
 * @slot default — Tab components
 */
</script>

<template>
  <div class="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
    <slot></slot>
  </div>
</template>
