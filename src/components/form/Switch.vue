<script setup lang="ts">
interface Props {
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const toggle = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue);
  }
};
</script>

<template>
  <div
    class="inline-flex items-center group cursor-pointer"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    @click="toggle"
  >
    <div
      :class="[
        'relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-gray-950',
        modelValue ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-800'
      ]"
    >
      <span
        :class="[
          'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform',
          modelValue ? 'translate-x-5' : 'translate-x-0'
        ]"
      ></span>
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
