import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

export const getAllVendors = async (): Promise<any> => {
  try {
    const response = await $axios.get("/admin/vendors");
    return response.data;
  } catch (error: any) {
     HandleAxiosError(error);
  }
};

export const getVendorTransactions = async (vendorId: string | number): Promise<any> => {
  try {
    const response = await $axios.get(`/admin/vendor-transactions/${vendorId}`);
    return response.data;
  } catch (error: any) {
     HandleAxiosError(error);
  }
};


