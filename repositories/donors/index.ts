import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

export const getAllDonors = async (): Promise<object> => {
  try {
    const response = await $axios.get("/admin/donors");
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};

// single ngo
export const getDonor = async (id: string): Promise<object> => {
  try {
    // endpoint goes here
    const test = {};
    return test;
  } catch (error) {
    return HandleAxiosError(error);
  }
};
