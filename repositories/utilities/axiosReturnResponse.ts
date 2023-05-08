import { AxiosError, AxiosResponse } from "axios";
import { useAuthStore } from "~/store/authentication";
 

export const HandleAxiosError = (error: AxiosError) => {
  const authStore = useAuthStore();
  const { logout } = authStore;

  // log user out if not authorized
  if (error.response?.data?.code == "401") return logout();

  // return error object if user is authorized
  return error.response?.data;
}; 
