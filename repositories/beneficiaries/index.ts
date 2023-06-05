import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

export interface Beneficiary {
first_name: string
last_name: string
email: string
phone: string
}


export const getAllBeneficiaries = async (): Promise<any> => {
  try {
    const response = await $axios.get(`/admin/beneficiaries`);
    return response.data;
  } catch (error: any) {
     HandleAxiosError(error);
  }
};

// single Beneficiary
export const getBeneficiary = async (id: string): Promise<any> => {
  try {
    // endpoint goes here
    const test = {};
    return test;
  } catch (error: any) {
     HandleAxiosError(error);
  }
};


export const addBeneficiary = async (data: Beneficiary): Promise<any> => {
  try {
    const response = await $axios.post('/admin/register-beneficiary');
    return response.data;
  } catch (error: any) {
     HandleAxiosError(error);
  }
};
