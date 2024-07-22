const mapWebOptionsFormatsApiToEntity = (
  webOptionsFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildWebOptionsFormat: Record<string, unknown> = {
    k_Funcio: String(webOptionsFormat.k_Funcio),
    n_Funcio: String(webOptionsFormat.n_Funcio),
    i_Privi: String(webOptionsFormat.i_Privi),
  };
  return buildWebOptionsFormat;
};

const mapWebOptionsFormatsApiToEntities = (
  webOptionsFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return webOptionsFormat.map(mapWebOptionsFormatsApiToEntity);
};
export { mapWebOptionsFormatsApiToEntities, mapWebOptionsFormatsApiToEntity };
