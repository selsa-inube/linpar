import { IdeleteLinixUseCase } from "./types";

const mapLinixUseCaseDeleteEntityToApi = (
  deleteLinixUseCase: IdeleteLinixUseCase
): Record<string, string | number | object> => {
  return {
    eliminarCasoDeUso: [
      {
        n_Usecase: String(deleteLinixUseCase.n_Usecase),
        removalJustification: String(deleteLinixUseCase.removalJustification),
        k_Usecase: String(deleteLinixUseCase.k_Usecase),
      },
    ],
  };
};

export { mapLinixUseCaseDeleteEntityToApi };
