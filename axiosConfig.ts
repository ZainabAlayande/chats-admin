import axios, { AxiosInstance } from "axios";
import { useAuthStore } from "~/store/authentication";

const $axios: AxiosInstance = axios.create({

  // This has to be changed later and should be taken from env
  baseURL: "https://staging-api.chats.cash/v1/",
});

// Interceptor to check if token is available and update headers
$axios.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  const { token } = authStore;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default $axios;
