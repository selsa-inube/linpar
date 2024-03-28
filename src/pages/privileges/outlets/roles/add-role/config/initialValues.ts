import { IFormAddRole } from "@pages/privileges/outlets/roles/types";

export const initialValuesAddRol: IFormAddRole = {
  generalInformation: {
    isValid: false,
    values: {
      roleName: "",
      description: "",
      aplication: "",
    },
  },
  ancillaryAccounts: {
    isValid: false,
    values: {
      officialSector: "",
      commercialSector: "",
      solidaritySector: "",
    },
  },
};
