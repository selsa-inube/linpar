import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";

const mapReportsWebFormatsApiToEntity = (
  reportsWebFormat: Record<string, string | number | object>
): IAssignmentFormEntry => {
  const buildReportsWebFormat: IAssignmentFormEntry = {
    id: String(reportsWebFormat.k_Report),
    value: String(reportsWebFormat.n_Report),
    isActive: Boolean(reportsWebFormat.i_Privi),
  };
  return buildReportsWebFormat;
};

const mapReportsWebFormatsApiToEntities = (
  ReportsWebFormat: Record<string, string | number | object>[]
): IAssignmentFormEntry[] => {
  return ReportsWebFormat.map(mapReportsWebFormatsApiToEntity);
};
export { mapReportsWebFormatsApiToEntities, mapReportsWebFormatsApiToEntity };
