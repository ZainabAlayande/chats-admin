import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

// all ngos
export const getAllNGOs = async (): Promise<object> => {
  try {
    const response = await $axios.get("/admin/ngos");
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};
// single ngo
export const getNGO = async (id: string): Promise<object> => {
  try {
    const response = await $axios.get("/admin/ngos");
    // endpoint goes here
    // const response = await $axios.get(`/admin/ngos/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
//  beneficiary total
export const getBeneficiaryTotal = async (
  organisation_id: string | number
): Promise<object> => {
  try {
    const response = await $axios.get(`/admin/ngos/${organisation_id}`);
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};

// logout
export const logout = () => {
  localStorage.removeItem("userToken");
};
