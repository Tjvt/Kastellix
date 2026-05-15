<script setup lang="ts">
/**
 * A container for grouping multiple Radio components.
 * 
 * @description
 * Manages the layout and provides a shared label and error state for a set of radio buttons.
 * 
 * @example
 * ```vue
 * <RadioGroup v-model="selected" label="Choose an option">
 *   <Radio value="1" label="Option 1" />
 *   <Radio value="2" label="Option 2" />
 * </RadioGroup>
 * ```
 * 
 * @slot default — Radio components
 */
interface Props {
  /** The currently selected value. */
  modelValue: string | number | boolean;
  /** The label displayed above the group. */
  label?: string;
  /** Validation error message. */
  error?: string;
  /** The layout direction of the radio buttons. @default 'vertical' */
  direction?: 'horizontal' | 'vertical';
}

withDefaults(defineProps<Props>(), {
  direction: 'vertical',
});
</script>

<template>
  <div class="space-y-2">
    <label v-if="label" class="text-sm font-medium leading-none dark:text-gray-200">{{ label }}</label>
    <div
      :class="[
        'flex gap-4',
        direction === 'vertical' ? 'flex-col' : 'flex-row items-center'
      ]"
    >
      <slot></slot>
    </div>
    <p v-if="error" class="text-xs text-red-500 font-medium">{{ error }}</p>
  </div>
</template>
