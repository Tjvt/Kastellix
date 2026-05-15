<script setup lang="ts">
import { watch } from 'vue';

/**
 * A slide-out panel component.
 * 
 * @description
 * Draws out from the edge of the screen to reveal additional content or actions. 
 * Supports all four sides and includes a title, close button, and optional footer.
 * 
 * @example
 * ```vue
 * <Drawer v-model="isOpen" title="Settings" side="right">
 *   <p>Drawer content goes here...</p>
 *   <template #footer>
 *     <Button @click="save">Save</Button>
 *   </template>
 * </Drawer>
 * ```
 * 
 * @slot default — Main content area
 * @slot footer — Optional content area at the bottom
 */
interface Props {
  /** Whether the drawer is visible. */
  modelValue: boolean;
  /** The side of the screen the drawer slides out from. @default 'right' */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** The title displayed in the drawer header. */
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  side: 'right',
});

const emit = defineEmits<{
  /** Fires when the drawer's visibility changes. Payload: new visibility state. */
  'update:modelValue': [value: boolean];
}>();

const close = () => {
  emit('update:modelValue', false);
};

const sideClasses = {
  top: 'inset-x-0 top-0 border-b h-1/3',
  right: 'inset-y-0 right-0 border-l w-80',
  bottom: 'inset-x-0 bottom-0 border-t h-1/3',
  left: 'inset-y-0 left-0 border-r w-80',
};

const transitionClasses = {
  top: { from: '-translate-y-full', to: 'translate-y-0' },
  right: { from: 'translate-x-full', to: 'translate-x-0' },
  bottom: { from: 'translate-y-full', to: 'translate-y-0' },
  left: { from: '-translate-x-full', to: 'translate-x-0' },
};

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
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 flex">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>
        
        <Transition
          appear
          enter-active-class="transition duration-300 ease-out"
          :enter-from-class="transitionClasses[side].from"
          :enter-to-class="transitionClasses[side].to"
          leave-active-class="transition duration-200 ease-in"
          :leave-from-class="transitionClasses[side].to"
          :leave-to-class="transitionClasses[side].from"
        >
          <div
            :class="[
              'relative bg-white shadow-lg dark:bg-gray-950 dark:border-gray-800 flex flex-col',
              sideClasses[side]
            ]"
          >
            <div class="flex items-center justify-between border-b p-4 dark:border-gray-800">
              <h3 class="text-lg font-semibold dark:text-gray-50">{{ title }}</h3>
              <button @click="close" class="opacity-70 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div class="flex-1 overflow-y-auto p-4">
              <slot></slot>
            </div>
            <div v-if="$slots.footer" class="border-t p-4 dark:border-gray-800">
              <slot name="footer"></slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
