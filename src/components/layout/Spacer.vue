<script setup lang="ts">
/**
 * A flexible space component for adding margins between elements.
 * 
 * @description
 * Used within Flex or Stack containers to push elements apart.
 * 
 * @example
 * ```vue
 * <Stack direction="row">
 *   <Button>Back</Button>
 *   <Spacer />
 *   <Button variant="primary">Next</Button>
 * </Stack>
 * ```
 */
interface Props {
  /** The size of the space. Supports Tailwind spacing scale values. @default 4 */
  size?: number | string;
}

withDefaults(defineProps<Props>(), {
  size: 4,
});
</script>

<template>
  <div :class="[`flex-none`, `p-${size}`]"></div>
</template>
