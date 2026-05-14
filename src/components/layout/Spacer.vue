<script setup lang="ts">
interface Props {
  size?: number | string;
}

withDefaults(defineProps<Props>(), {
  size: 4,
});
</script>

<template>
  <div :class="[`flex-none`, `p-${size}`]"></div>
</template>
