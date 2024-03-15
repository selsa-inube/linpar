import { IRol } from "./types";

export const mapGeneralInformation = (generalInformation: IRol) => {
  return {
    i_Activo: generalInformation.i_Activo,
    k_Rol: generalInformation.k_Rol,
    k_Tipcon: generalInformation.k_Tipcon,
    n_Rol: generalInformation.n_Rol,
    n_Uso: generalInformation.n_Uso,
    asosDeUsoPorRol: generalInformation.casosDeUsoPorRol,
    cuentasAuxiliaresPorRol: generalInformation.cuentasAuxiliaresPorRol,
    reglasDeNegocioPorRol: generalInformation.reglasDeNegocioPorRol,
    tareasCrediboardPorRol: generalInformation.tareasCrediboardPorRol,
  };
};
