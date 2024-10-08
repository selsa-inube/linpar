import { UseCase } from "@pages/catalogs/outlets/linixUseCase/types";

const mapLinixUseCaseEntityToApi = (
  linixUseCase: UseCase
): Record<string, string | number | object> => {
  return {
    i_Tipusec: String(linixUseCase.i_Tipusec),
    botonClienteServidor: {
      k_Ncampo: String(linixUseCase.k_Ncampo),
      k_Nforma:
        linixUseCase.k_Ncampo === "" ? "" : String(linixUseCase.k_Nforma),
    },
    n_Descrip: String(linixUseCase.n_Descrip),
    n_Usecase: String(linixUseCase.n_Usecase),
    a_Publicc: "vacio",
    opcionesCsPorCasoDeUso: Object(linixUseCase.opcionesCsPorCasoDeUso),
    opcionesPortalWebPorCasoDeUso: Object(
      linixUseCase.opcionesPortalWebPorCasoDeUso
    ),
    reportesCsPorCasoDeUso: Object(linixUseCase.reportesCsPorCasoDeUso),
    reportesWebPorCasoDeUso: Object(linixUseCase.reportesWebPorCasoDeUso),
  };
};

export { mapLinixUseCaseEntityToApi };
