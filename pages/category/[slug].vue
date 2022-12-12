<template>
  <div><NewsList :news="articles" /></div>
</template>

<!--<script setup></script>-->
<script setup>
const route = useRoute();

const { data: articles } = await useAsyncData(
  `${route.params.slug}Articles`,
  () =>
    $fetch(
      `http://127.0.0.1:1337/api/articles?filters[categories][slug][$eq]=${route.params.slug}&populate=*`
    )
);
</script>
<!--<script setup>-->
<!--const { findOne, find } = useStrapi();-->

<!--const { data } = await useAsyncData("articles", () =>-->
<!--  find("articles", { populate: "image" })-->
<!--);-->
<!--</script>-->
<style scoped></style>
