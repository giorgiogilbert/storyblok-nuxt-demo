<script setup lang="ts">
import type { StoryData } from "~/types/Story";
import Blocks from "~/components/Blocks.vue";
const props = defineProps<{
  story: StoryData;
}>();
const blocks = computed(() => {
  if (props.story.data.value) {
    return props.story.data.value.story.content.content;
  }
  return [];
});
</script>

<template>
  <div>
    <div v-if="story.pending.value">Loading...</div>
    <div v-else>
      <div v-if="story.error.value">Error: {{ story.error.value }}</div>
      <div v-else>
        <Blocks :blocks="blocks" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
