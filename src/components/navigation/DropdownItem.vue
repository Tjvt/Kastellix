<script setup lang="ts">
/**
 * An individual action or option within a Dropdown.
 * 
 * @description
 * Represents a single clickable item in a dropdown menu. 
 * Supports an optional icon and a danger variant.
 * 
 * @example
 * ```vue
 * <DropdownItem danger @click="handleDelete">
 *   <template #icon><IconTrash /></template>
 *   Delete Project
 * DropdownItem>
 * ```
 * 
 * @slot default — The item label
 * @slot icon — Optional icon to display before the label
 */
interface Props {
  /** Whether the item is disabled. @default false */
  disabled?: boolean;
  /** Whether the item represents a destructive action. Styles the text red. @default false */
  danger?: boolean;
}

defineProps<Props>();
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'flex w-full items-center px-4 py-2 text-sm transition-colors focus:bg-gray-100 focus:outline-none dark:focus:bg-gray-800',
      danger ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-200',
      disabled ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    ]"
  >
    <div v-if="$slots.icon" class="mr-2 h-4 w-4 shrink-0">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>
