const mapAplicationRolesFormatsApiToEntity = (
  reportsClientServerFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildreportsClientServerFormat: Record<string, unknown> = {
    k_Aplica: String(reportsClientServerFormat.k_Aplica),
    n_Aplica: String(reportsClientServerFormat.n_Aplica),
  };
  return buildreportsClientServerFormat;
};

const mapAplicationRolesFormatsApiToEntities = (
  reportsClientServerFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return reportsClientServerFormat.map(mapAplicationRolesFormatsApiToEntity);
};
export {
  mapAplicationRolesFormatsApiToEntities,
  mapAplicationRolesFormatsApiToEntity,
};
