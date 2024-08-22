const mapNominaFormatsApiToEntity = (
  nominaFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildNominaFormat: Record<string, unknown> = {
    k_Tipnom: String(nominaFormat.k_Tipnom),
    n_Tipnom: String(nominaFormat.n_Tipnom),
    i_Privil: String(nominaFormat.i_Privil),
  };
  return buildNominaFormat;
};

const mapNominaFormatsApiToEntities = (
  nominaFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return nominaFormat.map(mapNominaFormatsApiToEntity);
};
export { mapNominaFormatsApiToEntities, mapNominaFormatsApiToEntity };
