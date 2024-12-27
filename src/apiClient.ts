export const apiClient = () => {
  const apiBase = "https://api.storyblok.com/v2/cdn";
  const accessToken = useRuntimeConfig().public.storyblok.accessToken;

  const getStoryBySlug = async (slug: string, asDraft = false) => {
    let url = apiBase + "/stories/" + slug + "?token=" + accessToken + "&cv=" + Date.now();

    if (asDraft) {
      url += "&version=draft";
    }
    const response = await fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await response.json();
  };

  // Add more API methods if needed

  return {
    getPageBySlug: getStoryBySlug
  };
};
