<script setup lang="ts">
/**
 * A breadcrumb navigation component.
 * 
 * @description
 * Displays a trail of links to help users understand their current location in the application.
 * 
 * @example
 * ```vue
 * <Breadcrumb>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
 *   <BreadcrumbItem is-current>Breadcrumb</BreadcrumbItem>
 * </Breadcrumb>
 * ```
 * 
 * @slot default — BreadcrumbItem components
 */
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500 dark:text-gray-400">
      <slot></slot>
    </ol>
  </nav>
</template>
