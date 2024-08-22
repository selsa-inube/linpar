const mapUnidadesPresupuestalesFormatsApiToEntity = (
  unidadesPresupuestalesFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildUnidadesPresupuestalesFormat: Record<string, unknown> = {
    k_Unidad: String(unidadesPresupuestalesFormat.k_Unidad),
    n_Unidad: String(unidadesPresupuestalesFormat.n_Unidad),
    i_Privil: String(unidadesPresupuestalesFormat.i_Privil),
  };
  return buildUnidadesPresupuestalesFormat;
};

const mapUnidadesPresupuestalesFormatsApiToEntities = (
  unidadesPresupuestalesFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return unidadesPresupuestalesFormat.map(
    mapUnidadesPresupuestalesFormatsApiToEntity
  );
};
export {
  mapUnidadesPresupuestalesFormatsApiToEntities,
  mapUnidadesPresupuestalesFormatsApiToEntity,
};
