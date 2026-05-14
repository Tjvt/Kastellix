<script setup lang="ts">
interface Props {
  modelValue?: number | null;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  step: 1,
  placeholder: '',
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.value === '') {
    emit('update:modelValue', null);
    return;
  }

  emit('update:modelValue', Number(target.value));
};

const stepUp = () => {
  if (props.disabled) {
    return;
  }

  const next = (props.modelValue ?? 0) + props.step;
  if (props.max !== undefined && next > props.max) {
    return;
  }

  emit('update:modelValue', next);
};

const stepDown = () => {
  if (props.disabled) {
    return;
  }

  const next = (props.modelValue ?? 0) - props.step;
  if (props.min !== undefined && next < props.min) {
    return;
  }

  emit('update:modelValue', next);
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

    <div class="relative">
      <input
        type="number"
        :value="modelValue ?? ''"
        :min="min"
        :max="max"
        :step="step"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        @input="onInput"
        :class="[
          'flex h-10 w-full rounded-md border bg-transparent px-3 pr-16 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950 dark:text-gray-100',
          error ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-200 dark:border-gray-800'
        ]"
      />

      <div class="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
        <button
          type="button"
          class="h-4.5 w-6 rounded-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          :disabled="disabled"
          @click="stepUp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto"><path d="m18 15-6-6-6 6"/></svg>
        </button>
        <button
          type="button"
          class="h-4.5 w-6 rounded-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          :disabled="disabled"
          @click="stepDown"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto"><path d="m6 9 6 6 6-6"/></svg>
        </button>
      </div>
    </div>

    <p v-if="error" class="text-xs text-red-500 font-medium">{{ error }}</p>
    <p v-else-if="hint" class="text-xs text-gray-500 dark:text-gray-400">{{ hint }}</p>
  </div>
</template>
