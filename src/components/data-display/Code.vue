<script setup lang="ts">
/**
 * A component for displaying inline or block-level code.
 * 
 * @description
 * Formats text using a monospace font and background to distinguish code snippets from surrounding text.
 * 
 * @example
 * ```vue
 * <Code block code="const x = 1;" />
 * <p>Use <Code>npm install</Code> to start.</p>
 * ```
 * 
 * @slot default — The code content (overrides the `code` prop)
 */
interface Props {
  /** Whether to render as a block-level element (`pre`) instead of inline (`code`). @default false */
  block?: boolean;
  /** The code snippet to display. */
  code?: string;
}

defineProps<Props>();
</script>

<template>
  <pre
    v-if="block"
    class="overflow-x-auto rounded-lg bg-gray-100 p-4 font-mono text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100"
  ><code><slot>{{ code }}</slot></code></pre>
  <code
    v-else
    class="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-100"
  >
    <slot>{{ code }}</slot>
  </code>
</template>
