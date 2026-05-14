<script setup lang="ts">
import { ref, provide, readonly } from 'vue';

/**
 * A container for grouping vertically stacked content sections.
 * 
 * @description
 * Manages the open/closed state of its child `AccordionItem` components. 
 * Supports single or multiple open items.
 * 
 * @example
 * ```vue
 * <Accordion v-model="activeItems" multiple>
 *   <AccordionItem value="1" title="Section 1">Content 1</AccordionItem>
 *   <AccordionItem value="2" title="Section 2">Content 2</AccordionItem>
 * </Accordion>
 * ```
 * 
 * @slot default — AccordionItem components
 */
interface Props {
  /** The value(s) of the currently open items. */
  modelValue?: string | number | (string | number)[];
  /** Whether multiple items can be open at the same time. @default false */
  multiple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
});

const emit = defineEmits<{
  /** Fires when the set of open items changes. Payload: new active value(s). */
  'update:modelValue': [value: string | number | (string | number)[]];
}>();

const openItems = ref< (string | number)[] >(
  Array.isArray(props.modelValue) ? props.modelValue : props.modelValue !== undefined ? [props.modelValue] : []
);

const toggleItem = (value: string | number) => {
  if (props.multiple) {
    const index = openItems.value.indexOf(value);
    if (index > -1) {
      openItems.value.splice(index, 1);
    } else {
      openItems.value.push(value);
    }
    emit('update:modelValue', openItems.value);
  } else {
    if (openItems.value.includes(value)) {
      openItems.value = [];
    } else {
      openItems.value = [value];
    }
    emit('update:modelValue', openItems.value[0]);
  }
};

provide('openItems', readonly(openItems));
provide('toggleItem', toggleItem);
</script>

<template>
  <div class="w-full divide-y divide-gray-200 dark:divide-gray-800 border-b border-t border-gray-200 dark:border-gray-800">
    <slot></slot>
  </div>
</template>
