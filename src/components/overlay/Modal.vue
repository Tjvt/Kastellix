<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';

/**
 * A modal dialog component.
 * 
 * @description
 * Displays a dialog box on top of the main content, requiring user interaction. 
 * Supports various sizes, header/footer slots, and handles Escape key closure 
 * and body scroll locking.
 * 
 * @example
 * ```vue
 * <Modal v-model="showDialog" title="Confirm Action" size="sm">
 *   <p>Are you sure you want to proceed?</p>
 *   <template #footer>
 *     <Button variant="ghost" @click="showDialog = false">Cancel</Button>
 *     <Button variant="primary" @click="confirm">Confirm</Button>
 *   </template>
 * </Modal>
 * ```
 * 
 * @slot default — Main body content
 * @slot header — Custom header content (overrides `title` prop)
 * @slot footer — Content for the bottom action bar
 */
interface Props {
  /** Whether the modal is visible. */
  modelValue: boolean;
  /** The title displayed in the modal header. */
  title?: string;
  /** The maximum width of the modal. @default 'md' */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const emit = defineEmits<{
  /** Fires when the modal's visibility changes. Payload: new visibility state. */
  'update:modelValue': [value: boolean];
}>();

const close = () => {
  emit('update:modelValue', false);
};

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-[96vw]',
};

// Handle Escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    close();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
});

// Prevent body scroll when modal is open
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-swift-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-950/55 backdrop-blur-sm" @click="close"></div>

        <!-- Dialog -->
        <div
          :class="[
            'relative w-full rounded-xl border border-slate-200 bg-white shadow-panel dark:border-slate-800 dark:bg-slate-950',
            sizeClasses[size]
          ]"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-center justify-between border-b border-slate-100 p-4 dark:border-slate-800">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-50">
              <slot name="header">{{ title }}</slot>
            </h3>
            <button
              @click="close"
              class="rounded-md p-1 text-slate-500 ring-offset-white transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:ring-offset-slate-950"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          
          <div class="p-6">
            <slot></slot>
          </div>

          <div v-if="$slots.footer" class="flex items-center justify-end gap-2 border-t border-slate-100 p-4 dark:border-slate-800">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
