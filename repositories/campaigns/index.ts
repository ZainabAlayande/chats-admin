import $axios from "~/axiosConfig";
import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";

export const getAllCampaigns = async (): Promise<object> => {
  try {
    const response = await $axios.get("/admin/campaigns");
    return response.data;
  } catch (error) {
    return HandleAxiosError(error);
  }
};

// single Campaign
export const getCampaign = async (id: string): Promise<object> => {
  try {
    // endpoint goes here
    const test = {};
    return test;
  } catch (error) {
    return HandleAxiosError(error);
  }
};
