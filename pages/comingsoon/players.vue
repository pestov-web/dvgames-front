<template>
  <section class="section coming">
    <div class="coming__container">
      <h1 class="coming__title">
        <span class="coming__title-blue">Возрождение</span> портала DVG<span
          class="coming__small"
          >ames</span
        >
      </h1>
      <p class="coming__description">
        Вскоре мы анонсируем полную версию нашего портала. Мы объединим игроков
        по различным видам спорта на одной площадке. Присоединяйтесь к нам уже
        сейчас, будет интересно! Мы проинформируем вас о запуске рабочего
        проекта в тот же день!
      </p>
      <button class="coming__button">Я В ДЕЛЕ!</button>
    </div>
  </section>
</template>

<script>
definePageMeta({
  layout: "coming",
});
</script>

<style scoped>
.coming {
  @apply flex flex-col justify-center w-full h-full items-center;
  font-family: "Montserrat", serif;
}
.coming__container {
  @apply w-[552px] h-[781px] relative;
}
.coming__title {
  @apply max-w-[363px];
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 44px;
  text-transform: uppercase;
  color: #f36a08;
  padding-top: 155px;
}
.coming__title-blue {
  color: #1173cd;
}
.coming__description {
  @apply max-w-[346px] p-0 m-0;
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
}
.coming__button {
  font-family: "Montserrat", serif;
  width: 200px;
  height: 200px;
  background: linear-gradient(163.74deg, #ef5851 11.29%, #efb051 91.94%);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
  border-radius: 200px;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #fefefe;
  transition: all revert 0.6s;
  position: absolute;
  right: 0;
  top: 320px;
}
.coming__button:hover {
  background: #f36a08;
}
.coming__small {
  text-transform: lowercase;
}
</style>
