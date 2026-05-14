<script setup lang="ts">
/**
 * A date picker component using the native browser date input.
 * 
 * @description
 * Provides a standardized way to select dates, with support for labels, 
 * range constraints (min/max), and validation states.
 * 
 * @example
 * ```vue
 * <DatePicker 
 *   v-model="birthDate" 
 *   label="Date of Birth" 
 *   max="2023-12-31" 
 * />
 * ```
 */
interface Props {
  /** The selected date string in YYYY-MM-DD format. @default '' */
  modelValue?: string;
  /** The label displayed above the input. */
  label?: string;
  /** The minimum allowed date (YYYY-MM-DD). */
  min?: string;
  /** The maximum allowed date (YYYY-MM-DD). */
  max?: string;
  /** Validation error message. */
  error?: string;
  /** Helper text displayed below the input. */
  hint?: string;
  /** Whether the input is disabled. @default false */
  disabled?: boolean;
  /** Whether the input is required. @default false */
  required?: boolean;
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  /** Fires when the date value changes. Payload: new date string. */
  'update:modelValue': [value: string];
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="w-full space-y-1.5">
    <label
      v-if="label"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-200"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <input
      type="date"
      :value="modelValue"
      :min="min"
      :max="max"
      :disabled="disabled"
      :required="required"
      @input="onInput"
      :class="[
        'flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950 dark:text-gray-100',
        error ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-200 dark:border-gray-800'
      ]"
    />

    <p v-if="error" class="text-xs text-red-500 font-medium">{{ error }}</p>
    <p v-else-if="hint" class="text-xs text-gray-500 dark:text-gray-400">{{ hint }}</p>
  </div>
</template>
