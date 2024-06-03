<script setup lang="ts">

import Paragraph from "~/components/blocks/Paragraph.vue";
import Quote from "~/components/blocks/Quote.vue";
import Image from "~/components/blocks/Image.vue";
import NotImplementedFallback from "~/components/blocks/NotImplementedFallback.vue";

  const {slug} = useRoute().params;

  const getPageBySlug = async (slug:string) => {
    const apiBase = "https://api.storyblok.com/v2/cdn";
    const accessToken = useRuntimeConfig().public.storyblok.accessToken;
    const response = await fetch(
        apiBase + "/stories/" + slug + "?token=" + accessToken
    );
    return await response.json();
  };

  const {data, error} = useAsyncData(async () => {
    return await getPageBySlug(slug);
  });

  const blocks = computed(() => {
    if (data.value) {
      return data.value.story.content.content
    }
    return [];
  });

  const getVueComponent = (component: string) => {
    switch (component) {
      case "image":
        return Image;
      case "paragraph":
        return Paragraph;
      case "quote":
        return Quote;
      default:
        return NotImplementedFallback;
    }
  }
</script>

<template>
  <div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-else>
      <component v-for="block in blocks" :key="block._uid" :is="getVueComponent(block.component)" :data="block" class="storyblok-block"/>
    </div>
  </div>
</template>

<style scoped>
  .storyblok-block {
    padding: .5rem;
    margin: .5rem;
    border: 1px solid black;
  }
</style>
