// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
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
  terser: {
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
