<script setup lang="ts">
import type { Quote } from "~/types/Quote";

defineProps<{
  data: Quote;
}>();
</script>

<template>
  <div class="quote-wrapper">
    <blockquote>"{{ data.quote }}"</blockquote>
    <p class="quote-author">{{ data.author }}</p>
  </div>
</template>

<style scoped>
.quote-wrapper {
  border: 1px solid #aaa;
  background: #eee;
  padding: 1rem;
}
blockquote {
  font-style: italic;
}
.quote-author {
  text-align: right;
}
</style>
