<script setup lang="ts">
interface Props {
  block?: boolean;
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
