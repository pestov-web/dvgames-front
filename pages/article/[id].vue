<template>
  <div>
    <div>
      <div class="flex flex-col max-w-[1200px] justify-center mx-auto my-4">
        <nuxt-link to="/" class="back">на главную</nuxt-link>
        <nuxt-img
          provider="strapi"
          :src="article.data.attributes.image.data.attributes.url"
        />
        <h1 class="text-3xl my-4">{{ article.data.attributes.title }}</h1>
        <div
          v-html="article.data.attributes.content"
          class="flex flex-col justify-center items-center"
        ></div>
      </div>
    </div>
    <!--    <ArticleComments :comments="comments" :avatar="user" />-->
  </div>
</template>

<script setup>
const route = useRoute();
const { findOne } = useStrapi();
// const getStrapiUrl = media();

const { data: article } = await useAsyncData(`article${route.params.id}`, () =>
  findOne("articles", route.params.id, { populate: "image" })
);
// const { data: comments } = await useAsyncData(
//   `${route.params.id}Comments`,
//   () =>
//     $fetch(
//       `http://localhost:1337/api/comments/api::article.article:${route.params.id}`
//     )
// );
</script>
<style scoped>
.back {
  height: 40px;
  width: 120px;
  background-color: #1173cd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  border-radius: 5px;
}
</style>
