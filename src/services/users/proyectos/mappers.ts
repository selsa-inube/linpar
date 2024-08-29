const mapProyectosFormatsApiToEntity = (
  proyectosFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildProyectosFormat: Record<string, unknown> = {
    k_Numdoc: String(proyectosFormat.k_Numdoc),
    k_Tipodr: String(proyectosFormat.k_Tipodr),
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
