<script setup lang="ts">
import type {GridColumn} from "~/types/GridColumn";
import Blocks from "~/components/Blocks.vue";

const props = defineProps<{
  data: GridColumn;
}>();
const blocks = computed(() => props.data.content || []);
</script>

<template>
  <Blocks class="column" :blocks="blocks"/>
</template>
