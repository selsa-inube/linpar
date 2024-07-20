const mapDownloadableFormatsApiToEntity = (
  downloadableFormat: Record<string, string | number | object>
) => {
  const buildDownloadableFormat = {
    id: String(downloadableFormat.id),
    value: String(downloadableFormat.value),
    i_Privi: String(downloadableFormat.i_Privi),
  };
  return buildDownloadableFormat;
};

const mapDownloadableFormatsApiToEntities = (
  downloadableFormat: Record<string, string | number | object>[]
) => {
  return downloadableFormat.map(mapDownloadableFormatsApiToEntity);
};
export {
  mapDownloadableFormatsApiToEntities,
  mapDownloadableFormatsApiToEntity,
};
