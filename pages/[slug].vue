<script setup lang="ts">
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
</script>

<template>
  <div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-else>
      <!-- Just raw data for now, we'll make this work in a minute  -->
      {{ data }}
    </div>
  </div>
</template>

<style scoped>

</style>
