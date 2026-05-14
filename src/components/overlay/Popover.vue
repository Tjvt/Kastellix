<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

/**
 * A popover component for displaying floating content.
 * 
 * @description
 * Similar to a tooltip but can contain more complex content like forms or lists. 
 * Triggered by clicking an element and handles click-outside behavior.
 * 
 * @example
 * ```vue
 * <Popover>
 *   <template #trigger>
 *     <Button>More Info</Button>
 *   </template>
 *   <div class="space-y-2">
 *     <h4 class="font-medium">Details</h4>
 *     <p class="text-sm text-gray-500">More complex information here...</p>
 *   </div>
 * </Popover>
 * ```
 * 
 * @slot default — The content to display inside the popover
 * @slot trigger — The element that toggles the popover
 */
const isOpen = ref(false);
const popoverRef = ref<HTMLElement | null>(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (popoverRef.value && !popoverRef.value.contains(event.target as Node)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative inline-block" ref="popoverRef">
    <div @click="toggle" class="cursor-pointer">
      <slot name="trigger"></slot>
    </div>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute left-1/2 z-50 mt-3 -translate-x-1/2 px-4 w-screen max-w-sm"
      >
        <div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:border-gray-800 dark:bg-gray-950">
          <div class="p-4">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
