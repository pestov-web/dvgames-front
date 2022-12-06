<script setup>
const { find } = useStrapi();
const {
    data: news,
    pending,
    refresh,
    error,
} = await useAsyncData('newses', () => find('newses', { populate: 'picture' }));
</script>

<template>
    <div><NewsList :news="news" /></div>
</template>

<style scoped></style>
