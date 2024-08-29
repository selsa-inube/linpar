const mapRolesPorCargoApiToEntity = (
  rolesPorCargo: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildwebReportsFormat: Record<string, unknown> = {
    k_Grupo: String(rolesPorCargo.k_Grupo),
    i_Tierol: String(rolesPorCargo.i_Tierol),
    k_Rol: Number(rolesPorCargo.k_Rol),
    n_Rol: String(rolesPorCargo.n_Rol),
  };
  return buildwebReportsFormat;
};

const mapRolesPorCargoApiToEntities = (
  rolesPorCargoFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return rolesPorCargoFormat.map(mapRolesPorCargoApiToEntity);
};
export { mapRolesPorCargoApiToEntities, mapRolesPorCargoApiToEntity };
