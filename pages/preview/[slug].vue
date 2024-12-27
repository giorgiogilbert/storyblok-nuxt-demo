<script setup lang="ts">
const {slug} = useRoute().params;
const getPageBySlug = async (slug: string) => {
  const apiBase = "https://api.storyblok.com/v2/cdn";
  const accessToken = useRuntimeConfig().public.storyblok.accessToken;
  const response = await fetch(
      apiBase +
      "/stories/" +
      slug +
      "?token=" +
      accessToken +
      "&version=draft" +
      "&cv=" +
      Date.now(),
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
  );
  return await response.json();
};
const {data, error, pending} = useAsyncData(async () => {
  return await getPageBySlug(slug as string);
});

const blocks = computed(() => {
  if (data.value) {
    return data.value.story.content.content;
  }
  return [];
});

</script>

<template>
  <div class="preview-top-bar">Previewing story with slug <code>{{slug}}</code></div>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <div v-if="error">Error: {{ error }}</div>
      <div v-else>
        <Blocks :blocks="blocks"/>
      </div>
    </div>
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
