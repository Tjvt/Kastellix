<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue?: string | number | boolean;
  value: string | number | boolean;
  name?: string;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void;
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
