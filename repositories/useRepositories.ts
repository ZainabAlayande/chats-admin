import * as authRepository from "./auth/authRepository";
import * as ngosRepo from "./ngos/index";
import * as vendorsRepo from "./vendors/index";
import * as donorsRepo from "./donors/index";
import * as beneficiariesRepo from "./beneficiaries/index";
import * as campaignsRepo from "./campaigns/index";

export function useRepositories() {
  return {
    auth: authRepository,
    // Add other repositories here
    ngosRepo,
    vendorsRepo,
    donorsRepo,
    beneficiariesRepo,
    campaignsRepo,
  };
}
