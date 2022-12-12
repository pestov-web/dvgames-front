<script setup>
const { find } = useStrapi();
const {
  data: news,
  pending,
  refresh,
  error,
} = await useAsyncData("articles", () =>
  find("articles", { populate: ["image", "categories"] })
);
</script>

<template>
  <div><NewsList :news="news" /></div>
</template>

<style scoped></style>
