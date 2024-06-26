const mapTipoDeMovimientoPorRolFormatsApiToEntity = (
  reportsClientServerFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildreportsClientServerFormat: Record<string, unknown> = {
    k_Rol: String(reportsClientServerFormat.k_Rol),
    k_Tipmov: String(reportsClientServerFormat.k_Tipmov),
    n_Tipmov: String(reportsClientServerFormat.n_Tipmov),
    i_Privi: Boolean(reportsClientServerFormat.i_Privi),
  };
  return buildreportsClientServerFormat;
};

const mapTipoDeMovimientoPorRolFormatsApiToEntities = (
  reportsClientServerFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return reportsClientServerFormat.map(
    mapTipoDeMovimientoPorRolFormatsApiToEntity
  );
};
export {
  mapTipoDeMovimientoPorRolFormatsApiToEntities,
  mapTipoDeMovimientoPorRolFormatsApiToEntity,
};
