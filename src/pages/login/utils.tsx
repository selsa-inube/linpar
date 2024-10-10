import { getBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff";
import { IBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff/types";

export const validateBusinessUnities = async (
  publicCode: string,
  userAccount: string
): Promise<IBusinessUnitsPortalStaff[]> => {
  const newData = await getBusinessUnitsPortalStaff(publicCode, userAccount);

  return newData;
};
