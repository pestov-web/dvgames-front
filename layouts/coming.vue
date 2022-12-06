<script setup></script>

<template>
  <div class="page">
    <ComingSoonHeader />
    <main class="main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.page {
  background: black;
}
.main {
  @apply max-w-[1280px] mx-auto min-h-[74.5vh];
  background: center no-repeat url("/img/bg.png");
  background-size: cover;
}
</style>
