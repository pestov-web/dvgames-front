<script setup>
const user = useStrapiUser();
const { logout } = useStrapiAuth();
const router = useRouter();
const { find } = useStrapi();
const {
  data: categories,
  pending,
  refresh,
  error,
} = await useAsyncData("categories", () => find("categories"));

const handleLogout = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="logo">
        <a href="/">
          <nuxt-img src="/img/logo.svg" width="135" height="41"
        /></a>
      </div>
      <nav>
        <ul class="flex gap-2">
          <li
            v-for="category in categories.data"
            :key="category.attributes.slug"
          >
            <NuxtLink
              :to="`/category/${category.attributes.slug}`"
              class="bg-blend-color-burn"
              >{{ category.attributes.name }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <div class="user-menu">
        <div class="user-menu__nav" v-if="user">
          <NuxtLink :to="`/user/${user.id}`" class="user-menu__profile-link">{{
            user.username
          }}</NuxtLink>
          <NuxtLink to="/user/me" class="user-menu__profile-menu">
            <nuxt-img
              provider="strapi"
              :src="
                user.avatar
                  ? user.avatar.url
                  : '/uploads/old_logo_edf4809d01.webp?updated_at=2022-12-12T08:40:49.689Z'
              "
              width="40"
              height="40"
              class="user-menu__avatar"
          /></NuxtLink>
          <button @click="handleLogout" class="exit-button">выход</button>
        </div>
        <NuxtLink to="/user/login" class="user-menu__button" v-else
          >Вход</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply w-full flex justify-center h-24 max-w-[1280px] mx-auto;
  background: #fefefe;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
  &__container {
    @apply max-w-5xl flex justify-between w-full items-center;
  }
}
.user-menu {
  &__nav {
    @apply flex justify-center items-center gap-4;
  }
  &__avatar {
    @apply rounded-full;
  }
  &__profile-link {
    text-decoration: underline;
    transition: color linear 0.3s;
    &:hover {
      color: #f36a08;
    }
  }
  &__profile-menu {
    transition: all linear 0.3s;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
  &__button {
    display: flex;
    width: 182px;
    height: 48px;
    border: 2px solid #f36a08;
    border-radius: 10px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #f36a08;
    justify-content: center;
    align-items: center;
  }
}

.router-link-active {
  color: #f36a08;
}

.exit-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: #f36a08;
  padding: 0 10px 0;
  border-radius: 10px;
}
</style>
