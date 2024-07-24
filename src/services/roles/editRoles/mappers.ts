import { IRol } from "@src/pages/privileges/outlets/roles/types";

const mapEditRolesEntityToApi = (
  editRoles: IRol
): Record<string, string | number | object> => {
  return {
    modifyJustification: "<string>",
    k_Rol: Number(editRoles.k_Rol),
    n_Rol: String(editRoles.n_Rol),
    n_Uso: String(editRoles.n_Uso),
    k_Aplica: String(editRoles.k_Aplica),
    tiposDeMovimientoContablePorRol: Object(
      editRoles.tiposDeMovimientoContablePorRol
    ),
    reglasDeNegocioPorRol: Object(editRoles.reglasDeNegocioPorRol),
    casosDeUsoPorRol: Object(editRoles.casosDeUsoPorRol),
    cuentasAuxiliaresPorRol: Object(editRoles.cuentasAuxiliaresPorRol),
  };
};

export { mapEditRolesEntityToApi };
