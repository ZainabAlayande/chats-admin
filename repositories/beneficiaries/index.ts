import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

export const getAllBeneficiaries = async (): Promise<object> => {
  try {
    const response = await $axios.get(`/admin/beneficiaries`);
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};

// single Beneficiary
export const getBeneficiary = async (id: string): Promise<object> => {
  try {
    // endpoint goes here
    const test = {};
    return test;
  } catch (error) {
    return HandleAxiosError(error);
  }
};
