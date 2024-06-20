import {
  UseCase,
  UseCaseResponse,
} from "@src/pages/privileges/outlets/linixUseCase/types";
export const filterOptions = (options: any) => {
  const { k_Usecase, ...filteredOptions } = options;
  return filteredOptions;
};

const mapLinixUseCaseApiToEntity = (
  linixUseCase: Record<string, string | number | object>
): UseCaseResponse => {
  return {
    k_Usecase: String(linixUseCase.k_Usecase),
    n_Usecase: String(linixUseCase.n_Usecase),
    n_Camprv: String(linixUseCase.n_Camprv),
    n_Descrip: String(linixUseCase.n_Descrip),
    a_Publicc: String(linixUseCase.a_Publicc),
    i_Tipusec: String(linixUseCase.i_Tipusec),
    opcionesPortalWebPorCasoDeUso: Object(
      linixUseCase.opcionesPortalWebPorCasoDeUso
    ),
    reportesWebPorCasoDeUso: Object(linixUseCase.reportesWebPorCasoDeUso),
    reportesCsPorCasoDeUso: Object(linixUseCase.reportesCsPorCasoDeUso),
    opcionesCsPorCasoDeUso: Object(linixUseCase.opcionesCsPorCasoDeUso),
    tiposDeDocumentoPorCasoDeUso: Object(
      linixUseCase.tiposDeDocumentoPorCasoDeUso
    ),
  };
};

const mapLinixUseCaseEntityToApi = (
  linixUseCase: UseCase
): Record<string, string | number | object> => {
  return {
    a_Publicc: String(linixUseCase.a_Publicc),
    i_Tipusec: String(linixUseCase.i_Tipusec),
    k_Ncampo: String(linixUseCase.k_Ncampo),
    k_Nforma: String(linixUseCase.k_Nforma),
    k_Usecase: String(linixUseCase.k_Usecase),
    n_Descrip: String(linixUseCase.n_Descrip),
    n_Usecase: String(linixUseCase.n_Usecase),

    opcionesPortalWebPorCasoDeUso: Object(
      filterOptions(linixUseCase.opcionesPortalWebPorCasoDeUso)
    ),
    reportesWebPorCasoDeUso: Object(
      filterOptions(linixUseCase.reportesWebPorCasoDeUso)
    ),
    reportesCsPorCasoDeUso: Object(
      filterOptions(linixUseCase.reportesCsPorCasoDeUso)
    ),
    opcionesCsPorCasoDeUso: Object(
      filterOptions(linixUseCase.opcionesCsPorCasoDeUso)
    ),
    tiposDeDocumentoPorCasoDeUso: Object(
      filterOptions(linixUseCase.tiposDeDocumentoPorCasoDeUso)
    ),
  };
};

export { mapLinixUseCaseApiToEntity, mapLinixUseCaseEntityToApi };
