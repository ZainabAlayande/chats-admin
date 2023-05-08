import $axios from "~/axiosConfig";

export const getAllVendors = async (): Promise<object> => {

    try { 
    const response = await $axios.get("/admin/vendors");
  return response.data;
  } catch (error) { 
    return error.response.data;
  }
};
