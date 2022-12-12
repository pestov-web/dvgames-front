<script lang="ts" setup>
import TheFooter from "~~/components/TheFooter.vue";
import TheHeader from "~~/components/TheHeader.vue";
</script>

<template>
  <div class="page">
    <TheHeader />
    <main class="main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.page {
  background: black;
  @apply flex flex-col min-h-[100vh]  justify-between content-between max-w-[1280px] mx-auto;
  background: center no-repeat url("/img/bg.png");
  background-size: cover;
  background-attachment: fixed;
}
.main {
  @apply max-w-[1280px] w-full mx-auto h-full;
}
</style>

<style>
body {
  background-color: black;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
