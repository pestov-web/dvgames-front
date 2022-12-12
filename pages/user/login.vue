<template>
  <div class="max-w-md w-full mx-auto mt-16">
    <h1 class="text-3xl font-extrabold mb-4">Войти</h1>
    <form @submit.prevent="onSubmit">
      <div
        v-if="data.err"
        class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
        role="alert"
      >
        {{ data.err }}
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-blue-900 dark:text-gray-300"
          >Ваша почта</label
        >
        <input
          v-model="data.email"
          type="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="почта"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-blue-900 dark:text-gray-300"
          >Ваш пароль</label
        >
        <input
          v-model="data.password"
          type="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
          <NuxtLink
            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
            to="/user/forgot"
            >Забыли пароль </NuxtLink
          >?
        </p>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
          <NuxtLink
            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
            to="/user/register"
            >Регистрация
          </NuxtLink>
        </p>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const data = reactive({
  username: "",
  password: "",
  email: "",
  err: "",
  succes: "",
  // loading: false,
});
const { login } = useStrapiAuth();
const router = useRouter();
const onSubmit = async () => {
  try {
    await login({ identifier: data.email, password: data.password });
    router.push("/");
  } catch (e) {}
};
</script>

<style scoped></style>
