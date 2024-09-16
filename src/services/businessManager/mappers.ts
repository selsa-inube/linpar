import { IBusinessmanagers } from "./types";

const mapResendApiToEntity = (
  resend: Record<string, string | number | object>
): IBusinessmanagers => {
  const buildResend: IBusinessmanagers = {
    businessManagerId: String(resend.businessManagerId),
    publicCode: String(resend.publicCode),
    languageId: String(resend.languageId),
    abbreviatedName: String(resend.abbreviatedName),
    descriptionUse: String(resend.descriptionUse),
    urlBrand: String(resend.urlBrand),
    urlLogo: String(resend.urlLogo),
    customerId: String(resend.customerId),
  };
  return buildResend;
};

export { mapResendApiToEntity };
