const {
  public: { BASE_URL },
} = useRuntimeConfig();

// const apiFetch = $fetch.create({ baseURL: BASE_URL });

const request = (method: any, url: string, requestData?: any, params?: any) => {
  return $fetch(url, {
    baseURL: BASE_URL,
    method,
    requestData,
    params,
    headers: {
      "Content-type": "application/json",
    },

    onRequest({ options }) {
      const token = localStorage.getItem("userToken");

      if (token) {
        options.headers.Authorization = `Bearer ${token}`;
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
