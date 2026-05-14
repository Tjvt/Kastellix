<script setup lang="ts">
/**
 * An individual item within a Breadcrumb trail.
 * 
 * @description
 * Represents a single link or current location in the breadcrumb path.
 * 
 * @example
 * ```vue
 * <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
 * ```
 * 
 * @slot default — The label of the breadcrumb item
 * @slot separator — Custom separator icon/content
 */
interface Props {
  /** The URL the item links to. If not provided, the item renders as a span. */
  href?: string;
  /** Whether this item represents the current page. @default false */
  active?: boolean;
}

defineProps<Props>();
</script>

<template>
  <li class="inline-flex items-center gap-1.5">
    <a
      v-if="href"
      :href="href"
      :class="[
        'transition-colors hover:text-gray-900 dark:hover:text-gray-100',
        active ? 'font-normal text-gray-900 dark:text-gray-100' : ''
      ]"
    >
      <slot></slot>
    </a>
    <span
      v-else
      :class="[
        'transition-colors',
        active ? 'font-normal text-gray-900 dark:text-gray-100' : ''
      ]"
    >
      <slot></slot>
    </span>
    <slot name="separator">
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
        class="opacity-50"
      >
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </slot>
  </li>
</template>
