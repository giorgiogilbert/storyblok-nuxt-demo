<script setup lang="ts">
import type {Quote} from "~/types/Quote";

defineProps<{
  data: Quote
}>();
</script>

<template>
  <div>
    <blockquote>
      "{{ data.quote }}"
    </blockquote>
    <p class="quote-author">{{ data.author }}</p>
  </div>
</template>

<style scoped>
  blockquote {
    font-style: italic;
  }
  .quote-author {
    text-align: right;
  }
</style>
