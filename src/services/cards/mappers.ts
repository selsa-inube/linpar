import { IPortalStaff } from "./types";

const mapPortalStaffApiToEntity = (
  portalStaff: Record<string, string | number | object>
): IPortalStaff => {
  const builPortalStaff: IPortalStaff = {
    abbreviatedName: String(portalStaff.abbreviatedName),
    descriptionUse: String(portalStaff.descriptionUse),
    optionStaffId: String(portalStaff.optionStaffId),
    publicCode: String(portalStaff.publicCode),
    useCaseId: String(portalStaff.useCaseId),
    subOption: Object(portalStaff.subOption),
  };
  return builPortalStaff;
};

const mapOptionsByBusinessUnitsToEntities = (
  resend: Record<string, string | number | object>[]
): IPortalStaff[] => {
  return resend.map(mapPortalStaffApiToEntity);
};

export { mapPortalStaffApiToEntity, mapOptionsByBusinessUnitsToEntities };
