<script setup lang="ts">
import type {Block} from "~/types/Block";

defineProps<{
  data: Block
}>();
</script>

<template>
  <div>
    <p>Not vue component implemented for block type {{ data.component }}</p>
  </div>
</template>

<style scoped>

</style>
