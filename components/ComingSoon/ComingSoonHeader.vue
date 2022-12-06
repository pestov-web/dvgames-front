<script setup></script>

<template>
  <header class="header">
    <nav class="max-w-[856px] flex w-full items-center">
      <ul class="flex justify-between w-full">
        <li class="nav__item">
          <NuxtLink to="/comingsoon/players" class="bg-blend-color-burn"
            >Игрокам</NuxtLink
          >
        </li>
        <li class="nav__item">
          <NuxtLink to="/comingsoon/partners" class="bg-blend-color-burn"
            >Организаторам</NuxtLink
          >
        </li>
        <li class="nav__item">
          <a href="/comingsoon">
            <nuxt-img src="/img/logo.svg" width="135" height="41"
          /></a>
        </li>
        <li class="nav__item">
          <NuxtLink to="/comingsoon/writers" class="bg-blend-color-burn"
            >Авторам</NuxtLink
          >
        </li>
        <li>
          <div class="user-menu">
            <button class="user-menu__button">Вход</button>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply flex justify-center bg-slate-100 h-24 max-w-[1280px] mx-auto;
  background: #fefefe;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
}
.user-menu__button {
  width: 182px;
  height: 48px;
  border: 2px solid #f36a08;
  border-radius: 10px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #f36a08;
}
.nav__item {
  @apply flex items-center;
  overflow: hidden;
  box-sizing: border-box;
}
.router-link-active {
  color: #f36a08;
}
</style>
