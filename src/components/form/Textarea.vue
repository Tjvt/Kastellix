<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

/**
 * A multi-line text input component.
 * 
 * @description
 * An enhanced textarea supporting auto-resizing based on content, 
 * labels, hints, and error states.
 * 
 * @example
 * ```vue
 * <Textarea 
 *   v-model="bio" 
 *   label="Biography" 
 *   placeholder="Tell us about yourself..." 
 *   auto-resize 
 * />
 * ```
 */
interface Props {
  /** The value of the textarea. @default '' */
  modelValue?: string | number;
  /** The label displayed above the textarea. */
  label?: string;
  /** The placeholder text when the textarea is empty. @default '' */
  placeholder?: string;
  /** Validation error message. */
  error?: string;
  /** Helper text displayed below the textarea. */
  hint?: string;
  /** Whether the textarea is disabled. @default false */
  disabled?: boolean;
  /** Whether the textarea is required. @default false */
  required?: boolean;
  /** The initial number of visible text lines. @default 3 */
  rows?: number;
  /** Whether the textarea should automatically adjust its height to fit the content. @default false */
  autoResize?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '',
  disabled: false,
  required: false,
  rows: 3,
  autoResize: false,
});

const emit = defineEmits<{
  /** Fires when the textarea value changes. Payload: new value. */
  'update:modelValue': [value: string];
}>();

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const resize = () => {
  if (props.autoResize && textareaRef.value) {
    textareaRef.value.style.height = 'auto';
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px';
  }
};

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
  resize();
};

watch(() => props.modelValue, () => {
  if (props.autoResize) {
    resize();
  }
});

onMounted(() => {
  if (props.autoResize) {
    resize();
  }
});
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
    <textarea
      ref="textareaRef"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      @input="onInput"
      :class="[
        'flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:text-gray-100',
        error ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-200 dark:border-gray-800',
        autoResize ? 'overflow-hidden' : ''
      ]"
    ></textarea>
    <p v-if="error" class="text-xs text-red-500 font-medium">{{ error }}</p>
    <p v-else-if="hint" class="text-xs text-gray-500 dark:text-gray-400">{{ hint }}</p>
  </div>
</template>
