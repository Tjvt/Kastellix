<script setup lang="ts">
/**
 * A wrapper component for form controls to provide consistent labeling and messaging.
 * 
 * @description
 * Standardizes the layout for form fields, including label, required indicator, 
 * helper text (hint), and validation error messages.
 * 
 * @example
 * ```vue
 * <FormField label="Username" hint="Enter your preferred username" required>
 *   <Input v-model="username" />
 * </FormField>
 * ```
 * 
 * @slot default — The form control (Input, Select, etc.)
 * @slot error — Custom error content
 * @slot hint — Custom hint content
 */
interface Props {
  /** The label displayed above the form control. */
  label?: string;
  /** Helper text displayed below the form control. */
  hint?: string;
  /** Validation error message. */
  error?: string;
  /** Whether the field is required. Displays an asterisk if a label is present. */
  required?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="w-full space-y-1.5">
    <label
      v-if="label"
      class="text-sm font-medium leading-none dark:text-gray-200"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <div class="relative">
      <slot></slot>
    </div>

    <p v-if="error" class="text-xs text-red-500 font-medium">
      <slot name="error">{{ error }}</slot>
    </p>
    <p v-else-if="hint" class="text-xs text-gray-500 dark:text-gray-400">
      <slot name="hint">{{ hint }}</slot>
    </p>
  </div>
</template>
