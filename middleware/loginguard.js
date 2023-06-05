import { useAuthStore } from "~/store/authentication";

const authStore = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
    if (authStore.token) {
        return navigateTo('/ngos')
    }
  })