import { UseCase } from "@pages/privileges/outlets/linixUseCase/types";

const mapEditLinixUseCaseEntityToApi = (
  editUseCase: UseCase
): Record<string, string | number | object> => {
  return {
    modifyJustification: "<string>",
    a_Publicc: "<string>",
    i_Tipusec: String(editUseCase.i_Tipusec),
    botonClienteServidor: {
      k_Ncampo: String(editUseCase.k_Ncampo),
      k_Nforma: String(editUseCase.k_Nforma),
    },
    k_Usecase: String(editUseCase.k_Usecase),
    n_Descrip: String(editUseCase.n_Descrip),
    n_Usecase: String(editUseCase.n_Usecase),
    opcionesCsPorCasoDeUso: Object(editUseCase.opcionesCsPorCasoDeUso),
    opcionesPortalWebPorCasoDeUso: Object(
      editUseCase.opcionesPortalWebPorCasoDeUso
    ),
    reportesCsPorCasoDeUso: Object(editUseCase.reportesCsPorCasoDeUso),
    reportesWebPorCasoDeUso: Object(editUseCase.reportesWebPorCasoDeUso),
  };
};

export { mapEditLinixUseCaseEntityToApi };
