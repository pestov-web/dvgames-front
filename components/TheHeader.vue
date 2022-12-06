<script setup>
const { find } = useStrapi();
const { data: categories, pending, refresh, error } = await useAsyncData('categories', () => find('categories'));
</script>

<template>
    <header class="header">
        <div class="max-w-5xl flex justify-between w-full items-center">
            <div class="logo">
              <a href="/">      <nuxt-img
                  src="/img/logo.svg"
                  width="135"
                  height="41"
              /></a>


            </div>
            <nav>
                <ul class="flex gap-2">
                    <li v-for="category in categories.data" :key="category.attributes.slug">
                        <NuxtLink :to="`/category/${category.attributes.slug}`" class="bg-blend-color-burn">{{
                            category.attributes.name
                        }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="user-menu">
                <button class="user-menu__button">Вход</button>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
  @apply flex justify-center bg-slate-100 h-24 max-w-[1280px] mx-auto;
  background: #FEFEFE;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
}
.user-menu__button {
  width: 182px;
  height: 48px;
  border: 2px solid #F36A08;
  border-radius: 10px 0;font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #F36A08;
}
.router-link-active {
  @apply text-blue-800
}
</style>
