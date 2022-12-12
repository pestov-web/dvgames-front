// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "nuxt-icon",
    "nuxt-headlessui",
  ],
  // uncomment before deploy
  runtimeConfig: {
    strapi: {
      // nuxt/strapi options available server-side
      url: "http://localhost:1337",
    },
    public: {
      strapi: {
        // nuxt/strapi options available client-side
        url: "http://apid.pestov-web.ru",
      },
    },
  },
  strapi: {
    // comment before deploy
    // url: process.env.API_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
    auth: {
      populate: [
        "avatar",
        "categories",
        "achievements",
        "friends",
        "tel",
        "fullname",
      ],
    },
  },
  image: {
    strapi: {
      baseURL: "http://apid.pestov-web.ru",
    },
  },
});
