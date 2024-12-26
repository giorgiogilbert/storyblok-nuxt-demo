<script setup lang="ts">
import type { Paragraph } from "~/types/Paragraph";

defineProps<{
  data: Paragraph;
}>();
</script>

<template>
  <p>
    {{ data.body }}
  </p>
</template>

<style scoped></style>
