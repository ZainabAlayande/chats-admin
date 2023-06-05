import $axios from "~/axiosConfig";

import { HandleAxiosError } from "~/repositories/utilities/axiosReturnResponse";


export interface UpdateApprovalStatus {
  campaign_id: number | string
  request_id: number | string
  type: 'approve' | 'reject'
}


export const getWithdrawalRequests = async (): Promise<any> => {
  try {
    const response = await $axios.get("/admin/withdrawal-requests");
    return response.data;
  } catch (error: any) {
    HandleAxiosError(error);
  }
};


export const approveRejectRequest = async (orgId: string | number, data: UpdateApprovalStatus): Promise<any> => {
  try {
    // endpoint goes here
    const response = await $axios.post(`/admin/approve-reject-request/${orgId}`,  data);
    // console.log('RESPONSE DATA', response.data)
    return response.data;
  } catch (error: any) {
    HandleAxiosError(error);
  }
};