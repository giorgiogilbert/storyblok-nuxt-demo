<script setup lang="ts">
import type { Image } from "~/types/Image";
import useEditableBlock from "~/composables/useEditableBlock";
const props = defineProps<{
  data: Image;
}>();
useEditableBlock(props.data);
</script>

<template>
  <div>
    <img :src="data.image.filename" :alt="data.image.alt" :title="data.image.title" />
    <p v-if="data.image.copyright">{{ data.image.copyright }}</p>
  </div>
</template>

<style scoped>
img {
  display: inline-block;
  max-width: 300px;
}
</style>
