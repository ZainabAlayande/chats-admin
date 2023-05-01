import * as authRepository from "./auth/authRepository";

export function useRepositories() {
  return {
    auth: authRepository,
    // Add other repositories here
  };
}
