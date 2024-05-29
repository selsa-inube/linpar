import { IAssignmentFormEntry } from "@src/pages/privileges/outlets/users/types/forms.types";

const mapDownloadableFormatsApiToEntity = (
  downloadableFormat: Record<string, string | number | object>
): IAssignmentFormEntry => {
  const buildDownloadableFormat: IAssignmentFormEntry = {
    id: String(downloadableFormat.k_Docume),
    value: String(downloadableFormat.n_Docume),
    isActive: Boolean(downloadableFormat.i_Privi),
  };
  return buildDownloadableFormat;
};

const mapDownloadableFormatsApiToEntities = (
  downloadableFormat: Record<string, string | number | object>[]
): IAssignmentFormEntry[] => {
  return downloadableFormat.map(mapDownloadableFormatsApiToEntity);
};
export {
  mapDownloadableFormatsApiToEntities,
  mapDownloadableFormatsApiToEntity,
};
