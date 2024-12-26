<script setup lang="ts">
import type {Quote} from "~/types/Quote";
import QuoteComponent from "~/components/blocks/Quote.vue";
const exampleQuoteData : Quote = {
  _uid: "xxx",
  component: "quote",
  quote: "Test quote",
  author: "Test author"
}
</script>

<template>
  <QuoteComponent :data="exampleQuoteData" />
</template>

<style scoped>

</style>
