<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
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
    <div class="relative flex items-center">
      <div v-if="$slots.prefix" class="absolute left-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
        <slot name="prefix"></slot>
      </div>
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        @input="onInput"
        :class="[
          'flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:text-gray-100',
          error ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-200 dark:border-gray-800',
          $slots.prefix ? 'pl-10' : '',
          $slots.suffix ? 'pr-10' : '',
        ]"
      />
      <div v-if="$slots.suffix" class="absolute right-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
        <slot name="suffix"></slot>
      </div>
    </div>
    <p v-if="error" class="text-xs text-red-500 font-medium">{{ error }}</p>
    <p v-else-if="hint" class="text-xs text-gray-500 dark:text-gray-400">{{ hint }}</p>
  </div>
</template>
