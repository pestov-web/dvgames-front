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
const { data: events } = await useAsyncData("events", () =>
  find("events", { populate: "logo" })
);
</script>

<template>
  <div class="flex">
    <NewsList :news="news" />
    <EventsList :events="events" />
  </div>
</template>

<style scoped></style>
