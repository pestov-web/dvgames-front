<script setup>
const props = defineProps({
    news: {
        type: Object,
    },
});
</script>

<template>
    <h2>Новости</h2>
    <ul class="flex p-4 gap-2">
        <li v-for="article in news.data.reverse()" class="flex flex-col max-w-[300px] p-2 gap-2 border-2 ">
            <nuxt-img
                provider="strapi"
                :src="article.attributes.picture.data.attributes.url"
                width="300"
                height="169"
            />
            <h3 class="font-bold">{{ article.attributes.title }}</h3>
            <p class="text-sm">{{ article.attributes.description }}</p>
            <span>{{ article.attributes.createdAt }}</span>
        </li>
    </ul>
</template>

<style scoped></style>
