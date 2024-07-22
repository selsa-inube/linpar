import { IRol } from "@src/pages/privileges/outlets/roles/types";

const mapEditRolesEntityToApi = (
  editRoles: IRol
): Record<string, string | number | object> => {
  return {
    modifyJustification: "<string>",
    k_Rol: Number(editRoles.k_Rol),
    n_Rol: String(editRoles.n_Rol),
  };
};

export { mapEditRolesEntityToApi };
