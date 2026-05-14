<script setup lang="ts">
/**
 * Standard text input field.
 * 
 * @description
 * A versatile input component supporting various types (text, email, password, etc.), 
 * labels, helper text, and validation error states.
 * 
 * @example
 * ```vue
 * <Input 
 *   v-model="email" 
 *   label="Email Address" 
 *   type="email" 
 *   placeholder="you@example.com" 
 *   required 
 * />
 * ```
 * 
 * @slot prefix — Icon or text to display before the input value
 * @slot suffix — Icon or text to display after the input value
 */
interface Props {
  /** The value of the input. @default '' */
  modelValue?: string | number;
  /** The label displayed above the input. */
  label?: string;
  /** The HTML input type (e.g., 'text', 'password', 'email', 'number'). @default 'text' */
  type?: string;
  /** The placeholder text when the input is empty. @default '' */
  placeholder?: string;
  /** Validation error message. If provided, the input will be styled with a red border. */
  error?: string;
  /** Helper text displayed below the input (if no error is present). */
  hint?: string;
  /** Whether the input is disabled. @default false */
  disabled?: boolean;
  /** Whether the input is required. Displays an asterisk if a label is present. @default false */
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
  /** Fires when the input value changes. Payload: new value. */
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
