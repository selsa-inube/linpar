import { IdeleteRoles } from "./types";

const mapRolesDeleteEntityToApi = (
  deleterol: IdeleteRoles
): Record<string, string | number | object> => {
  return {
    eliminarRol: [
      {
        n_Rol: String(deleterol.n_Rol),
        removalJustification: String(deleterol.removalJustification),
        k_Rol: Number(deleterol.k_Rol),
      },
    ],
  };
};

export { mapRolesDeleteEntityToApi };
