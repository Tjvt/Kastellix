<script setup lang="ts">
interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

interface Props {
  columns: Column[];
  data: any[];
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'sort', key: string): void;
}>();
</script>

<template>
  <div class="w-full overflow-auto">
    <table class="w-full caption-bottom text-sm">
      <thead class="[&_tr]:border-b">
        <tr class="border-b transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
          <th
            v-for="col in columns"
            :key="col.key"
            class="h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400"
          >
            <div class="flex items-center gap-2">
              {{ col.label }}
              <button
                v-if="col.sortable"
                @click="emit('sort', col.key)"
                class="rounded hover:bg-gray-200 dark:hover:bg-gray-700 p-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="[&_tr:last-child]:border-0">
        <tr
          v-for="(row, i) in data"
          :key="i"
          class="border-b transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
        >
          <td
            v-for="col in columns"
            :key="col.key"
            class="p-4 align-middle dark:text-gray-200"
          >
            <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
