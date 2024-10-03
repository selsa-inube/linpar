import { IBusinessUnitsPortalStaff } from "./types";

const mapBusinessUnitsPortalStaffToEntity = (
  resend: Record<string, string | number | object>
): IBusinessUnitsPortalStaff => {
  const buildResend: IBusinessUnitsPortalStaff = {
    businessUnitPublicCode: String(resend.businessUnitPublicCode),
    languageId: String(resend.languageId),
    abbreviatedName: String(resend.abbreviatedName),
    descriptionUse: String(resend.descriptionUse),
    firstMonthOfFiscalYear: String(resend.firstMonthOfFiscalYear),
    urlLogo: String(resend.urlLogo),
  };
  return buildResend;
};

export { mapBusinessUnitsPortalStaffToEntity };
