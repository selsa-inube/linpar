const mapPositionsApiToEntity = (
  position: Record<string, string | number | object>
) => {
  const builPostions: Record<string, unknown> = {
    id: String(position.k_Grupo),
    i_Activo: String(position.i_Activo),
    k_Grupo: String(position.k_Grupo),
    n_Grupo: String(position.n_Grupo),
    n_Uso: String(position.n_Uso),
  };
  return builPostions;
};

const mapPositionsApiToEntities = (
  position: Record<string, string | number | object>[]
) => {
  return position.map(mapPositionsApiToEntity);
};
export { mapPositionsApiToEntities, mapPositionsApiToEntity };
