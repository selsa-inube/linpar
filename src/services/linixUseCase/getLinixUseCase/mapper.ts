import { formSelectOptionId } from "@pages/catalogs/outlets/linixUseCase/config/dataUseCases.config";
import { UseCase } from "@pages/catalogs/outlets/linixUseCase/types";

const mapLinixUseCaseApiToEntity = (
  linixUseCase: Record<string, string | number | object>
): UseCase => {
  const opcionMenu = String(linixUseCase.n_Camprv).split(";");

  const buildLinixUseCase: UseCase = {
    id: String(linixUseCase.k_Usecase),
    k_Usecase: String(linixUseCase.k_Usecase),
    n_Usecase: String(linixUseCase.n_Usecase),
    n_Descrip: String(linixUseCase.n_Descrip),
    a_Publicc: String(linixUseCase.a_Publicc),
    i_Tipusec: formSelectOptionId(String(linixUseCase?.i_Tipusec)) || "",
    k_Ncampo: String(linixUseCase.n_Camprv),
    k_Nforma: String(linixUseCase.k_Nforma),
    k_Funcio: opcionMenu[0],
    k_option_button: opcionMenu[1] || "",
    reportesWebPorCasoDeUso: Object(linixUseCase.reportesWebPorCasoDeUso),
    opcionesPortalWebPorCasoDeUso: Object(
      linixUseCase.opcionesPortalWebPorCasoDeUso
    ),
    reportesCsPorCasoDeUso: Object(linixUseCase.reportesCsPorCasoDeUso),
    opcionesCsPorCasoDeUso: Object(linixUseCase.opcionesCsPorCasoDeUso),
  };
  return buildLinixUseCase;
};

const mapLinixUseCaseApiToEntities = (
  users: Record<string, string | number | object>[]
): UseCase[] => {
  return users.map(mapLinixUseCaseApiToEntity);
};
export { mapLinixUseCaseApiToEntities, mapLinixUseCaseApiToEntity };
