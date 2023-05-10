import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

export const getAllVendors = async (): Promise<object> => {
  try {
    const response = await $axios.get("/admin/vendors");
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};
