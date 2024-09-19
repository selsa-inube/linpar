import { getBusinessmanagers } from "@services/businessManager";
import { IBusinessmanagers } from "@services/businessManager/types";
import { IStaffPortalByBusinessManager } from "@services/staffPortal/types";
import { getStaffPortalByBusinessManager } from "@services/staffPortal";

export const validateBusinessManagers = async (
  code: string
): Promise<IBusinessmanagers> => {
  const newData = await getBusinessmanagers(code);

  return newData;
};

export const validateConsultation = async (): Promise<
  IStaffPortalByBusinessManager[]
> => {
  const newData = await getStaffPortalByBusinessManager();
  return newData;
};
