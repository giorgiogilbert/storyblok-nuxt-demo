<script setup lang="ts">
import type { Paragraph } from "~/types/Paragraph";
import useEditableBlock from "~/composables/useEditableBlock";

const props = defineProps<{
  data: Paragraph;
}>();
useEditableBlock(props.data);
</script>

<template>
  <p>
    {{ data.body }}
  </p>
</template>

<style scoped></style>
