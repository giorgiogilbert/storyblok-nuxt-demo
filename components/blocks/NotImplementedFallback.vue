<script setup lang="ts">
import type { Block } from "~/types/Block";
import useEditableBlock from "~/composables/useEditableBlock";

const props = defineProps<{
  data: Block;
}>();
useEditableBlock(props.data);
</script>

<template>
  <div>
    <p>Not vue component implemented for block type {{ data.component }}</p>
  </div>
</template>

<style scoped></style>
