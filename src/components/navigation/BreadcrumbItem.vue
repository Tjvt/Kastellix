<script setup lang="ts">
interface Props {
  href?: string;
  active?: boolean;
}

defineProps<Props>();
</script>

<template>
  <li class="inline-flex items-center gap-1.5">
    <a
      v-if="href"
      :href="href"
      :class="[
        'transition-colors hover:text-gray-900 dark:hover:text-gray-100',
        active ? 'font-normal text-gray-900 dark:text-gray-100' : ''
      ]"
    >
      <slot></slot>
    </a>
    <span
      v-else
      :class="[
        'transition-colors',
        active ? 'font-normal text-gray-900 dark:text-gray-100' : ''
      ]"
    >
      <slot></slot>
    </span>
    <slot name="separator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="opacity-50"
      >
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </slot>
  </li>
</template>
