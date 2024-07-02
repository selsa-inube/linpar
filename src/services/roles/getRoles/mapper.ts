import { IRol } from "@src/pages/privileges/outlets/roles/types";

const mapRolesUseCaseApiToEntity = (
  roles: Record<string, string | number | object>
): IRol => {
  const buildRolesUseCase: IRol = {
    id: Number(roles.k_Rol),
    k_Rol: Number(roles.k_Rol),
    k_Tipcon: String(roles.k_Tipcon),
    n_Rol: String(roles.n_Rol),
    n_Uso: String(roles.n_Uso),
    k_Aplica: String(roles.k_Aplica),
    i_Activo: roles.i_Activo ? "Y" : "N",
  };
  return buildRolesUseCase;
};

const mapRolesUseCaseApiToEntities = (
  users: Record<string, string | number | object>[]
): IRol[] => {
  return users.map(mapRolesUseCaseApiToEntity);
};
export { mapRolesUseCaseApiToEntities, mapRolesUseCaseApiToEntity };
