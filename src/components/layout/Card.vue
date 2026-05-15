<script setup lang="ts">
/**
 * A container component for grouping content with a border and shadow.
 * 
 * @description
 * Cards are used to group related information and actions together. 
 * They support optional header and footer slots.
 * 
 * @example
 * ```vue
 * <Card shadow="lg">
 *   <template #header>
 *     <h3>Card Title</h3>
 *   </template>
 *   <p>This is the main content of the card.</p>
 *   <template #footer>
 *     <Button variant="primary">Action</Button>
 *   </template>
 * </Card>
 * ```
 * 
 * @slot default — Main body content of the card
 * @slot header — Optional content at the top of the card
 * @slot footer — Optional content at the bottom of the card
 */
interface Props {
  /** The shadow depth of the card. @default 'md' */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
  shadow: 'md',
});

const shadowClasses = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-panel',
  lg: 'shadow-soft',
  xl: 'shadow-xl',
};
</script>

<template>
  <div :class="['rounded-xl border border-slate-200 bg-white text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50', shadowClasses[shadow]]">
    <div v-if="$slots.header" class="flex flex-col space-y-1.5 border-b border-slate-100 p-6 dark:border-slate-800">
      <slot name="header"></slot>
    </div>
    <div class="p-6">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="flex items-center border-t border-slate-100 p-6 dark:border-slate-800">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
