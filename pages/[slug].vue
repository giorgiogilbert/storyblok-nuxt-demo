<script setup lang="ts">
import { apiClient } from "~/src/apiClient";
const { slug } = useRoute().params;

const { data, error, pending } = await useAsyncData(async () => {
  return await apiClient().getPageBySlug(slug as string);
});
const story = { data, error, pending };
</script>

<template>
  <PageWrapper :story="story" />
</template>
