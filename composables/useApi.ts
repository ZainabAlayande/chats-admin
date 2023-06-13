import { useAuthStore } from "~/store/authentication";
import * as Toast from "vue-toastification";

const request = (method: any, url: string, requestData?: any, params?: any) =>
  $fetch(url, {
    baseURL: useRuntimeConfig().public.BASE_URL,
    method,
    params,
    body: requestData,

    onRequest({ options }) {
      const token = localStorage.getItem("userToken");

      if (token) {
        options.headers = {
          ...(options.headers || {}),
          Authorization: `Bearer ${token}`
        }
      }
    },

    onResponseError({ request, response, options }) {
      // Log error
      console.log('[fetch response error]', request, response.status, response.body)

      const toast = Toast.useToast();
      const authStore = useAuthStore();

      const isMaybeNetworkError = !response.body

      if (response) {
        const errStatus = response?.status
        switch (errStatus) {
          case 400:
            // toast.error(response?.data?.message)
            return
          case 401:
            // toast.error(error.response?.data?.message)
            authStore.logout()
            return
          // router.replace({
          //   path: "/login",
          //   query: {
          //     redirect: router.currentRoute.fullPath
          //   }
          // })

          // break
          case 403:
            break
          case 404:
            break
          case 422:
            break
          case 502:
            break
          case 503:
            toast.error('Server is unavailable at the moment. Please try again later')
            return
        }

        toast.error(response?.statusText)
        // Promise.reject(error)  
        return
      } else if (isMaybeNetworkError) {
        toast.info('Kindly check your connection')
        return
      }
    }
  });


export interface UpdateStatus {
  userId: number | string
  status: 'activated' | 'suspended'
}

export interface Beneficiary {
  first_name: string
  last_name: string
  email: string
  phone: string
}

export interface UpdateApprovalStatus {
  campaign_id: number | string
  request_id: number | string
  type: 'approve' | 'reject'
}

export interface Vendor {
  first_name: string
  last_name: string
  email: string
  phone: string
  location: string
  address: string
  store_name: string
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export const useApi = () => {
  return {
    login(payload: LoginCredentials) {
      return request('POST', '/admin/auth/login', payload)
    },

    getAllDonors() {
      return request("GET", '/admin/donors');
    },

    updateStatus(data: UpdateStatus) {
      return request('POST', '/admin/donors', data)
    },

    getDonorTransactions(id: string | number) {
      return request('GET', `/organisations/${id}/wallets/transactions`)
    },

    getAllBeneficiaries() {
      return request('GET', '/admin/beneficiaries')
    },

    addBeneficiary(data: Beneficiary) {
      return request('POST', '/admin/register-beneficiary', data)
    },

    getWithdrawalRequests() {
      return request('GET', '/admin/withdrawal-requests')
    },

    approveRejectRequest(orgId: string | number, data: UpdateApprovalStatus) {
      return request('POST', `/admin/approve-reject-request/${orgId}`, data)
    },

    getAllVendors() {
      return request('GET', '/admin/vendors')
    },

    getVendorTransactions(vendorId: string | number) {
      return request('GET', `/admin/vendor-transactions/${vendorId}`)

    },

    addVendor(data: Vendor) {
      return request('POST', '/admin/register-vendor', data)
    },

    getAllNGOs() {
      return request('GET', '/admin/ngos')
    },

    getBeneficiaryTotal(organisation_id: string | number) {
      return request('GET', `/admin/ngos/${organisation_id}`)
    },

    getNGO(id: string) {
      return request('GET', `/admin/ngos`)
    },

    getAllCampaigns() {
      return request('GET', '/admin/campaigns')
    },

    getCampaign(id: string | number) {
      return request('GET', `/admin/campaign-info/${id}`)
    },

    getCampaignVendors(orgID: string | number, campaignID: string | number) {
      return request('GET', `/organisations/${orgID}/campaigns/${campaignID}/vendors`)
    },

    getCampaignComplaints(orgID: string | number, campaignID: string | number) {
      return request('GET', `/organisations/${orgID}/campaigns/${campaignID}/complaints`)
    },

    getSingleNGO(orgID: string | number) {
      return request('GET', `/ngos/${orgID}`)
    },

    getResolvedComplaints(orgID: string | number, campaignID: string | number, complaintID: string | number) {
      return request('GET', `/organisations/${orgID}/campaigns/${campaignID}/complaints/${complaintID}/resolve`)
    },

    getComplaint(orgID: string | number, campaignID: string | number, complaintID: string | number) {
      return request('GET', `/organisations/${orgID}/campaigns/${campaignID}/complaints/${complaintID}`)
    }


  }
}
