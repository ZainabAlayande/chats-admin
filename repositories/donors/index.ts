import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

export interface UpdateStatus {
  userId: number | string
  status: 'activated' | 'suspended'
}

export const getAllDonors = async (): Promise<object> => {
  try {
    const response = await $axios.get("/admin/donors");
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};

// single ngo
export const getDonorTransactions = async (id: any): Promise<object> => {
  try {
    // endpoint goes here
    const response = await $axios.get(`/organisations/${id}/wallets/transactions`);
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};


export const updateStatus = async (data: UpdateStatus): Promise<object> => {
  try {
    // endpoint goes here
    const response = await $axios.post('/admin/update-status', data);
    // console.log('RESPONSE DATA', response.data)
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};
