const mapSucursalesFormatsApiToEntity = (
  sucursalesFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildSucursalesFormat: Record<string, unknown> = {
    k_Sucurs: String(sucursalesFormat.k_Sucurs),
    n_Sucurs: String(sucursalesFormat.n_Sucurs),
    i_Privil: String(sucursalesFormat.i_Privil),
  };
  return buildSucursalesFormat;
};

const mapSucursalesFormatsApiToEntities = (
  sucursalesFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return sucursalesFormat.map(mapSucursalesFormatsApiToEntity);
};
export { mapSucursalesFormatsApiToEntities, mapSucursalesFormatsApiToEntity };
