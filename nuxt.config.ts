// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      storyblok: {
        accessToken: process.env.STORYBLOK_DELIVERY_ACCESS_TOKEN,
      },
    },
  },
  devtools: { enabled: true },
});
