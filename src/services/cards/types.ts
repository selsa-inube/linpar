interface IPortalStaffOption {
  optionStaffId: string;
  publicCode: string;
  abbreviatedName: string;
  descriptionUse: string;
  useCaseId: string;
}
export interface IPortalStaff {
  optionStaffId: string;
  publicCode: string;
  abbreviatedName: string;
  descriptionUse: string;
  useCaseId: string;
  subOption: IPortalStaffOption[];
}
