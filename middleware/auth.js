import { useAuthStore } from "~/store/authentication";

const authStore = useAuthStore();
const { token } = authStore;

export default defineNuxtRouteMiddleware((to, from) => {
  if (!token) {
    abortNavigation('No Active Session')

    return navigateTo('/')
  }
})