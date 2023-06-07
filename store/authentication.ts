export const useAuthStore = defineStore("auth", () => {
  const token = ref<String>("");
  const user = ref<Object>({});

  const setAuthToken = (authToken: string) => {
    token.value = authToken;
    localStorage.setItem("userToken", authToken);
  };
  const setAuthUser = (userData: object) => {
    user.value = userData;
  };
  const logout = () => {
    const router = useRouter();
    user.value = {};
    token.value = "";
    localStorage.removeItem("userToken");
    router.push("/");
  };

  return { setAuthToken, setAuthUser, token, logout };
});
