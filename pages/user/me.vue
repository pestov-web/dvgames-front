<script setup>
const route = useRoute();
const user = useStrapiUser();
</script>

<template>
  <div class="flex w-full">
    <div class="m-8">
      <div
        v-if="user"
        class="w-full w-[200px] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4"
      >
        <div class="flex flex-col items-center pb-10">
          <nuxt-img
            class="mb-3 w-24 h-24 rounded-full shadow-lg"
            provider="strapi"
            :src="
              user.avatar
                ? user.avatar.url
                : '/uploads/old_logo_edf4809d01.webp?updated_at=2022-12-12T08:40:49.689Z'
            "
            width="40"
            height="40"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {{ user.username }}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{
            user.name
          }}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{
            user.fullname
          }}</span>
        </div>
      </div>
    </div>
    <div class="m-8">
      <h4 class="pb-2">Редактировать профиль</h4>
      <div v-if="user" class="">
        <form class="flex flex-col max-w-[500px] w-full">
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-600 pt-2 w-[300px]"
            >Ник</label
          >
          <input
            v-model="user.username"
            type="username"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            disabled
          />
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-600 pt-2"
            >Полное имя</label
          >
          <input
            v-model="user.fullname"
            type="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            disabled
          />
          <label
            for="tel"
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-600 pt-2"
            >Телефон</label
          >
          <input
            v-model="user.tel"
            type="tel"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            disabled
          />
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-600 pt-2"
            >Email</label
          >
          <input
            v-model="user.email"
            type="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            disabled
          />
          <label
            for="url"
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-600 pt-2"
            >Avatar</label
          >
          <input
            v-model="user.avatar.url"
            type="url"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            disabled
          />
          <button
            class="mt-6 border-blue-900 border-2 flex justify-center items-center rounded h-10"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
