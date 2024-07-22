const mapUseCasesByRoleByRoleFormatsApiToEntity = (
  rolesUseCaseByRolesFormat: Record<string, string | number | object>
): Record<string, unknown> => {
  const buildRolesUseCaseByRolesFormat: Record<string, unknown> = {
    k_Rol: String(rolesUseCaseByRolesFormat.k_Rol),
    k_Usecase: String(rolesUseCaseByRolesFormat.k_Usecase),
    n_Usecase: String(rolesUseCaseByRolesFormat.n_Usecase),
    i_Privi: Boolean(rolesUseCaseByRolesFormat.i_Privi),
  };
  return buildRolesUseCaseByRolesFormat;
};

const mapUseCasesByRoleByRoleFormatsApiToEntities = (
  rolesUseCaseByRolesFormat: Record<string, string | number | object>[]
): Record<string, unknown>[] => {
  return rolesUseCaseByRolesFormat.map(
    mapUseCasesByRoleByRoleFormatsApiToEntity
  );
};
export {
  mapUseCasesByRoleByRoleFormatsApiToEntities,
  mapUseCasesByRoleByRoleFormatsApiToEntity,
};
