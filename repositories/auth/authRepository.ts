import { LoginCredentials } from "./interface";
import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

// login here
export const login = async (payload: LoginCredentials): Promise<object> => {
  try {
    const response = await $axios.post("/admin/auth/login", payload);
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};
