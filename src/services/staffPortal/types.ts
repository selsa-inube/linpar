export interface IoptionsByStaffPortalBusinessManager {
  optionStaffId: string;
  staffPortalCatalogId: string;
  staffPortalId: string;
}
export interface IStaffPortalByBusinessManager {
  abbreviatedName?: string;
  businessManagerId?: string;
  descriptionUse?: string;
  optionsByStaffPortalBusinessManager?: IoptionsByStaffPortalBusinessManager[];
  publicCode?: string;
  staffPortalCatalogId?: string;
  staffPortalId?: string;
  url?: string;
}
