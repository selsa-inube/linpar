const mapWebOptionsFormatsApiToEntity = (
  webOptionsFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildWebOptionsFormat: Record<string, unknown> = {
    id: String(webOptionsFormat.k_Funcio),
    value: String(webOptionsFormat.n_Funcio),
    isActive: Boolean(webOptionsFormat.i_Privi),
  };
  return buildWebOptionsFormat;
};

const mapWebOptionsFormatsApiToEntities = (
  webOptionsFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return webOptionsFormat.map(mapWebOptionsFormatsApiToEntity);
};
export { mapWebOptionsFormatsApiToEntities, mapWebOptionsFormatsApiToEntity };
