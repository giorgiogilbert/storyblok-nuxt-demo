<script setup lang="ts">
import type {GridRow} from "~/types/GridRow";
import GridColumn from "~/components/blocks/GridColumn.vue";

const props = defineProps<{
  data: GridRow;
}>();
const columns = computed(() => props.data.columns || []);
</script>

<template>
  <div class="row">
    <GridColumn v-for="column in columns" :key="column._uid" :data="column"/>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}
</style>
