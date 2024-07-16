import { IAssignmentFormEntry } from "@src/pages/privileges/outlets/users/types/forms.types";

const mapDownloadableFormatsApiToEntity = (
  downloadableFormat: Record<string, string | number | object>
): IAssignmentFormEntry => {
  const buildDownloadableFormat: IAssignmentFormEntry = {
    id: String(downloadableFormat.id),
    value: String(downloadableFormat.value),
    isActive: Boolean(downloadableFormat.isActive),
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
