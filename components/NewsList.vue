<script setup>
const props = defineProps({
  news: {
    type: Object,
  },
});
</script>

<template>
  <div class="pb-[100px]">
    <h2 class="news__title">Новости</h2>
    <ul class="news__list">
      <li v-for="article in news.data" class="news__card">
        <NuxtLink :to="`/article/${article.id}`" class="news__card-link">
          <nuxt-img
            provider="strapi"
            :src="article.attributes.image.data.attributes.url"
            width="300"
            height="169"
          />
          <h3 class="news__card-title">{{ article.attributes.title }}</h3>
          <p class="news__card-description">
            {{ article.attributes.description }}
          </p>
        </NuxtLink>
        <div class="news__card-info">
          <span class="news__card-date">{{ article.attributes.date }}</span>
          <span>{{
            article.attributes.categories.data[0].attributes.name
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.news {
  &__title {
    @apply p-4 font-bold;
  }
  &__list {
    @apply flex p-4 gap-4 flex-wrap;
  }
  &__card {
    @apply max-w-[300px] bg-blue-50 rounded-md overflow-hidden shadow-2xl flex flex-col justify-between;
    transition: all linear 0.2s;
    &:hover {
      transform: scale(1.03, 1.03);
    }
    &-link {
      @apply flex flex-col gap-2;
    }
    &-title {
      @apply font-bold px-2;
    }
    &-description {
      @apply text-sm px-2;
    }

    &-info {
      @apply p-2 flex justify-between self-end w-full;
    }
  }
}
</style>
