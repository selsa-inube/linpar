const mapProyectosFormatsApiToEntity = (
  proyectosFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildProyectosFormat: Record<string, unknown> = {
    k_Numdoc: String(proyectosFormat.k_Numdoc),
    n_Objeto: String(proyectosFormat.n_Objeto),
    i_Privil: String(proyectosFormat.i_Privil),
  };
  return buildProyectosFormat;
};

const mapProyectosFormatsApiToEntities = (
  proyectosFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return proyectosFormat.map(mapProyectosFormatsApiToEntity);
};
export { mapProyectosFormatsApiToEntities, mapProyectosFormatsApiToEntity };
