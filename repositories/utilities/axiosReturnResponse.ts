import { AxiosError, AxiosResponse } from "axios";
import { useAuthStore } from "~/store/authentication";
import * as Toast from "vue-toastification";
// import Vue from "vue";

export const HandleAxiosError = (error: AxiosError) => {
  const authStore = useAuthStore();
  const { logout } = authStore;
  const toast = Toast.useToast();

  const isMaybeNetworkError = !error?.response

  if (isMaybeNetworkError) {
    toast.info('Kindly check your connection')
    return
  }

  // log user out if not authorized
  if (error.response?.data?.code == "401") {
    toast.error('Session Expired')
    return logout();
  }

  toast.error(error.response?.data?.message)

  // return error object if user is authorized
// Promise reject
  return error.response?.data;
}; 
