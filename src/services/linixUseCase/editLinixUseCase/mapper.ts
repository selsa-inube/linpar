import { UseCase } from "@src/pages/privileges/outlets/linixUseCase/types";

const mapEditLinixUseCaseEntityToApi = (
  editUseCase: UseCase
): Record<string, string | number | object> => {
  console.log(editUseCase, "estoy cansado");
  return {
    modifyJustification: "<string>",
    a_Publicc: "<string>",
    i_Tipusec: String(editUseCase.i_Tipusec),
    k_Ncampo: "CD387MCERTIDEP.I_CONTIT",
    k_Nforma: String(editUseCase.k_Nforma),
    k_Usecase: String(editUseCase.k_Usecase),
    n_Descrip: String(editUseCase.n_Descrip),
    n_Usecase: String(editUseCase.n_Usecase),
    // opcionesCsPorCasoDeUso: Object(editUseCase.opcionesCsPorCasoDeUso),
  };
};

export { mapEditLinixUseCaseEntityToApi };
