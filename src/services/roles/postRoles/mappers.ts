import { IRol } from "@src/pages/catalogs/outlets/roles/types";

const mapRolesEntityToApi = (
  roles: IRol
): Record<string, string | number | object> => {
  return {
    i_Activo: "Y",
    k_Aplica: String(roles.k_Aplica),
    k_Rol: Number(roles.k_Rol),
    k_Tipcon: "<string>",
    n_Rol: String(roles.n_Rol),
    n_Uso: String(roles.n_Uso),
    tiposDeMovimientoContablePorRol: Object(
      roles.tiposDeMovimientoContablePorRol
    ),
    reglasDeNegocioPorRol: Object(roles.reglasDeNegocioPorRol),
    casosDeUsoPorRol: Object(roles.casosDeUsoPorRol),
    cuentasAuxiliaresPorRol: Object(roles.cuentasAuxiliaresPorRol),
  };
};

export { mapRolesEntityToApi };
