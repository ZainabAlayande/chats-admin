import { defineStore } from "pinia";

interface AuthState {
  token: string;
  user?: object;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: "",
    user: {},
  }),

  actions: {},

  persist: true,
});
