<script setup lang="ts">
import { computed } from 'vue';

/**
 * A checkbox component for boolean or array-based multiple selection.
 * 
 * @description
 * Supports standalone boolean state or participation in a group via array-based `v-model`.
 * Also supports an indeterminate state for nested selection logic.
 * 
 * @example
 * ```vue
 * <Checkbox v-model="termsAccepted" label="I accept the terms" />
 * ```
 */
interface Props {
  /** The value of the checkbox. Can be boolean or an array of values. @default false */
  modelValue?: boolean | any[];
  /** The value associated with the checkbox when used in an array-based group. */
  value?: any;
  /** The label displayed next to the checkbox. */
  label?: string;
  /** Whether the checkbox is disabled. @default false */
  disabled?: boolean;
  /** Whether the field is required. Displays an asterisk if a label is present. @default false */
  required?: boolean;
  /** Whether the checkbox is in an indeterminate state. @default false */
  indeterminate?: boolean;
  /** Validation error message. If provided, the checkbox will be styled with a red border. */
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  required: false,
  indeterminate: false,
});

const emit = defineEmits<{
  /** Fires when the checked state changes. Payload: new boolean value or updated array. */
  'update:modelValue': [value: boolean | any[]];
}>();

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return props.modelValue === true;
});

const toggle = () => {
  if (props.disabled) return;

  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue];
    const index = newValue.indexOf(props.value);
    if (index > -1) {
      newValue.splice(index, 1);
    } else {
      newValue.push(props.value);
    }
    emit('update:modelValue', newValue);
  } else {
    emit('update:modelValue', !props.modelValue);
  }
};
</script>

<template>
  <div class="space-y-1.5">
    <div
      class="inline-flex items-center group cursor-pointer"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
      @click="toggle"
    >
      <div
        :class="[
          'flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
          isChecked || indeterminate ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-transparent dark:border-gray-700',
          error ? 'border-red-500' : ''
        ]"
      >
        <svg v-if="indeterminate" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <svg v-else-if="isChecked" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <label
        v-if="label"
        class="ml-2 text-sm font-medium leading-none cursor-pointer group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white"
        :class="{ 'cursor-not-allowed': disabled }"
      >
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </label>
    </div>
    <p v-if="error" class="text-xs text-red-500 font-medium">{{ error }}</p>
  </div>
</template>
