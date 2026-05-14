<script setup lang="ts">
import { computed, ref } from 'vue';

interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface Props {
  modelValue?: string | number | null;
  options: Option[];
  label?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  placeholder: 'Search option...',
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void;
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
