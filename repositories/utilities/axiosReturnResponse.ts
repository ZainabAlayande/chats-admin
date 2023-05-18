import { AxiosError, AxiosResponse } from "axios";
import { useAuthStore } from "~/store/authentication";
import { useToast } from "vue-toastification";
// import Vue from "vue";

export const HandleAxiosError = (error: AxiosError) => {
  const authStore = useAuthStore();
  const { logout } = authStore;
  const toast = useToast();


  toast.error(error.response?.data?.message)
  // log user out if not authorized
  if (error.response?.data?.code == "401") return logout(); 
    

  // return error object if user is authorized
  return error.response?.data;
}; 
