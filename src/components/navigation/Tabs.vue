<script setup lang="ts">
import { ref, provide, readonly } from 'vue';

interface Props {
  modelValue?: string | number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const activeTab = ref(props.modelValue);

const selectTab = (value: string | number) => {
  activeTab.value = value;
  emit('update:modelValue', value);
};

provide('activeTab', readonly(activeTab));
provide('selectTab', selectTab);
</script>

<template>
  <div class="w-full">
    <slot></slot>
  </div>
</template>
