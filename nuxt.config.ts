// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "sweetalert2/src/sweetalert2.scss",
    "~/assets/styles/tailwind.scss",
    "~/assets/styles/global.scss",
    "~/assets/styles/fonts.scss",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },

  build: {
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
});
