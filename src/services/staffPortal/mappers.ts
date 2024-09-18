import { IStaffPortalByBusinessManager } from "./types";

const mapResendApiToEntity = (
  resend: Record<string, string | number | object>
): IStaffPortalByBusinessManager => {
  const buildResend: IStaffPortalByBusinessManager = {
    abbreviatedName: String(resend.abbreviatedName),
    businessManagerId: String(resend.businessManagerId),
    descriptionUse: String(resend.descriptionUse),
    publicCode: String(resend.publicCode),
    staffPortalCatalogId: String(resend.staffPortalCatalogId),
    staffPortalId: String(resend.staffPortalId),
    url: String(resend.url),
  };
  return buildResend;
};

const mapResendApiToEntities = (
  resend: Record<string, string | number | object>[]
): IStaffPortalByBusinessManager[] => {
  return resend.map(mapResendApiToEntity);
};
export { mapResendApiToEntities, mapResendApiToEntity };
