import { LoginCredentials } from "./interface";
import $axios from "~/axiosConfig";

export const login = async (payload: LoginCredentials): Promise<object> => {
  const response = await $axios.post("/auth/donor-login/", payload);
  return response.data;
};
