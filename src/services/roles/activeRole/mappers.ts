import { IactiveRoles } from "./types";

const mapRolesActiveEntityToApi = (
  activeRol: IactiveRoles
): Record<string, string | number | object> => {
  return {
    k_Rol: Number(activeRol.k_Rol),
    i_Activo: String(activeRol.i_Activo),
    modifyJustification: "Lincon",
  };
};

export { mapRolesActiveEntityToApi };
