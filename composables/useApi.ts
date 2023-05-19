// const apiFetch = $fetch.create({ baseURL: BASE_URL });

const request = (method: any, url: string, requestData?: any, params?: any) => {
    return $fetch(url, {
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
    });
  };
  
  export const useApi = () => {
    return {
      getAllDonors() {
        return request("GET", "/admin/donors");
      },
    };
  };
  