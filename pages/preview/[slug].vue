<script setup lang="ts">
import type { Block } from "~/types/Block";
import { apiClient } from "~/src/apiClient";
import PageWrapper from "~/components/PageWrapper.vue";

const { slug } = useRoute().params;
const { data, error, pending } = await useAsyncData(async () => {
  return await apiClient().getPageBySlug(slug as string, true);
});
const story = { data, error, pending };

useHead({
  script: [
    {
      src: "https://app.storyblok.com/f/storyblok-v2-latest.js"
    }
  ]
});
type InputEventPayload = {
  story: {
    content: {
      content: Block[];
    };
  };
};
const refresh = (payload: InputEventPayload) => {
  data.value = payload;
};
onMounted(() => {
  const { StoryblokBridge, location } = window;
  const storyblokInstance = new StoryblokBridge();
  storyblokInstance.on(["published", "change"], () => {
    location.reload();
  });
  storyblokInstance.on("input", (payload: InputEventPayload) => {
    refresh(payload);
  });
});
const storyComponentName = computed(() => story.data.value?.story.content.component || "");
const storyVueComponent = computed(() => {
  if (storyComponentName.value === "page") {
    return PageWrapper;
  }
  // add more mappings if needed
  return false;
});
</script>

<template>
  <div class="preview-top-bar">
    Previewing story with slug <code>{{ slug }}</code>
  </div>
  <component :is="storyVueComponent" v-if="storyVueComponent" :story="story" />
  <div v-else>
    I cannot preview content of type <code>{{ storyComponentName }}</code> since it is not mapped to
    any Vue component.
  </div>
</template>

<style scoped>
.preview-top-bar {
  width: 100%;
  height: 2rem;
  background: lightblue;
  line-height: 2rem;
  text-align: center;
}
</style>
