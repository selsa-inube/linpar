import { ICuentasAuxiliaresPorRol } from "@pages/catalogs/outlets/roles/types";

const mapRolesCuentasAuxiliaresApiToEntity = (
  rolesCuentasA: Record<string, string | number | object>
): ICuentasAuxiliaresPorRol => {
  const buildRolesUseCase: ICuentasAuxiliaresPorRol = {
    id: Number(rolesCuentasA.k_Rol),
    i_Tipent: String(rolesCuentasA.i_Tipent),
    k_Codcta: String(rolesCuentasA.k_Codcta),
  };
  return buildRolesUseCase;
};

const mapRolesCuentasAuxiliaresApiToEntities = (
  users: Record<string, string | number | object>[]
): ICuentasAuxiliaresPorRol[] => {
  return users.map(mapRolesCuentasAuxiliaresApiToEntity);
};
export {
  mapRolesCuentasAuxiliaresApiToEntities,
  mapRolesCuentasAuxiliaresApiToEntity,
};
