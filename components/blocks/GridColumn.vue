<script setup lang="ts">
import type {GridColumn} from "~/types/GridColumn";
import Blocks from "~/components/Blocks.vue";
import useEditableBlock from "~/composables/useEditableBlock";

const props = defineProps<{
  data: GridColumn;
}>();
useEditableBlock(props.data);
const blocks = computed(() => props.data.content || []);
</script>

<template>
  <Blocks class="column" :blocks="blocks"/>
</template>
