<script setup lang="ts">
import { computed, ref } from 'vue';

interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}

/**
 * A searchable dropdown selection component.
 * 
 * @description
 * Combines a button-triggered dropdown with an internal search input to filter 
 * and select from a list of options.
 * 
 * @example
 * ```vue
 * <Combobox
 *   v-model="selectedUser"
 *   label="User"
 *   :options="[
 *     { label: 'Alice', value: '1' },
 *     { label: 'Bob', value: '2' }
 *   ]"
 * />
 * ```
 */
interface Props {
  /** The currently selected value. @default null */
  modelValue?: string | number | null;
  /** List of options to filter and select from. */
  options: Option[];
  /** The label displayed above the combobox. */
  label?: string;
  /** The placeholder text shown when no value is selected. @default 'Search option...' */
  placeholder?: string;
  /** Validation error message. */
  error?: string;
  /** Helper text displayed below the field. */
  hint?: string;
  /** Whether the field is disabled. @default false */
  disabled?: boolean;
  /** Whether the field is required. @default false */
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  placeholder: 'Search option...',
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  /** Fires when the selected value changes. Payload: new value or null. */
  'update:modelValue': [value: string | number | null];
}>();

const isOpen = ref(false);
const query = ref('');

const selected = computed(() => props.options.find(option => option.value === props.modelValue));

const filteredOptions = computed(() => {
  const normalized = query.value.trim().toLowerCase();
  if (!normalized) {
    return props.options;
  }

  return props.options.filter(option => option.label.toLowerCase().includes(normalized));
});

const toggle = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};

const onBlur = () => {
  setTimeout(() => {
    isOpen.value = false;
    query.value = '';
  }, 150);
};

const selectOption = (option: Option) => {
  if (option.disabled) {
    return;
  }

  emit('update:modelValue', option.value);
  isOpen.value = false;
  query.value = '';
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

    <div class="relative" @focusout="onBlur">
      <button
        type="button"
        :disabled="disabled"
        @click="toggle"
        :class="[
          'flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950 dark:text-gray-100',
          error ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-200 dark:border-gray-800'
        ]"
      >
        <span :class="selected ? '' : 'text-gray-500 dark:text-gray-400'">
          {{ selected?.label || placeholder }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>

      <div
        v-if="isOpen"
        class="absolute z-20 mt-1 w-full rounded-md border border-gray-200 bg-white p-2 shadow-md dark:border-gray-800 dark:bg-gray-950"
      >
        <input
          v-model="query"
          type="text"
          :placeholder="placeholder"
          class="mb-2 h-9 w-full rounded-md border border-gray-200 bg-transparent px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-800 dark:text-gray-100"
        />
        <ul class="max-h-52 space-y-0.5 overflow-auto">
          <li v-if="filteredOptions.length === 0" class="px-2 py-1.5 text-sm text-gray-500 dark:text-gray-400">
            No options found.
          </li>
          <li
            v-for="option in filteredOptions"
            :key="option.value"
            :class="[
              'cursor-pointer rounded-md px-2 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800',
              option.disabled ? 'cursor-not-allowed opacity-50' : ''
            ]"
            @click="selectOption(option)"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>

    <p v-if="error" class="text-xs text-red-500 font-medium">{{ error }}</p>
    <p v-else-if="hint" class="text-xs text-gray-500 dark:text-gray-400">{{ hint }}</p>
  </div>
</template>
