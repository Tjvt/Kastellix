<script setup lang="ts">
import { ref, provide, readonly } from 'vue';

interface Props {
  modelValue?: string | number | (string | number)[];
  multiple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | (string | number)[]): void;
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
