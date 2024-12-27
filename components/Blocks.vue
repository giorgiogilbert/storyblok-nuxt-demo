<script setup lang="ts">
import type { Block } from "~/types/Block";
import Image from "~/components/blocks/Image.vue";
import Paragraph from "~/components/blocks/Paragraph.vue";
import Quote from "~/components/blocks/Quote.vue";
import GridRow from "~/components/blocks/GridRow.vue";
import NotImplementedFallback from "~/components/blocks/NotImplementedFallback.vue";

defineProps<{
  blocks: Block[];
}>();

const getVueComponent = (component: string) => {
  switch (component) {
    case "image":
      return Image;
    case "paragraph":
      return Paragraph;
    case "quote":
      return Quote;
    case "gridrow":
      return GridRow;
    default:
      return NotImplementedFallback;
  }
};
</script>

<template>
  <component
    v-for="block in blocks"
    :key="block._uid"
    :is="getVueComponent(block.component)"
    :data="block"
    class="storyblok-block"
    :id="`storyblock-block-${block._uid}`"
  />
</template>

<style scoped>
.storyblok-block {
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
}
</style>
