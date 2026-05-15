<script setup lang="ts">
import { computed } from 'vue';

/**
 * A radio button component for selecting a single option from a set.
 * 
 * @description
 * Usually used within a `RadioGroup` but can also be used independently.
 * 
 * @example
 * ```vue
 * <Radio v-model="selected" value="option1" label="Option 1" />
 * ```
 */
interface Props {
  /** The currently selected value in the group. */
  modelValue?: string | number | boolean;
  /** The unique value represented by this radio button. */
  value: string | number | boolean;
  /** The name attribute for the underlying input element. */
  name?: string;
  /** The label displayed next to the radio button. */
  label?: string;
  /** Whether the radio button is disabled. @default false */
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const emit = defineEmits<{
  /** Fires when the radio button is selected. Payload: the value of this radio button. */
  'update:modelValue': [value: string | number | boolean];
}>();

const isChecked = computed(() => props.modelValue === props.value);

const select = () => {
  if (!props.disabled) {
    emit('update:modelValue', props.value);
  }
};
</script>

<template>
  <div
    class="inline-flex items-center group cursor-pointer"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    @click="select"
  >
    <div
      :class="[
        'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gray-300 ring-offset-white transition-all dark:border-gray-700',
        isChecked ? 'border-blue-600 border-[5px]' : 'bg-transparent'
      ]"
    >
    </div>
    <label
      v-if="label"
      class="ml-2 text-sm font-medium leading-none cursor-pointer dark:text-gray-200"
      :class="{ 'cursor-not-allowed': disabled }"
    >
      {{ label }}
    </label>
  </div>
</template>
