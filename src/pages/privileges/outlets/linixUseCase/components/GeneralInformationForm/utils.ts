import { editLinixUseCase } from "@src/services/linixUseCase/editLinixUseCase";
import { UseCase } from "../../types";
import { formSelectLabel } from "../../config/dataUseCases.config";

export const editLinixUseCases = async (linixUseCaseData: UseCase) => {
  const newLinixUseCase: UseCase = {
    k_Usecase: linixUseCaseData.k_Usecase,
    n_Usecase: linixUseCaseData.n_Usecase,
    n_Descrip: linixUseCaseData.n_Descrip,
    a_Publicc: "<string>",
    i_Tipusec: formSelectLabel(linixUseCaseData.i_Tipusec) || "",
    k_Ncampo: "CD387MCERTIDEP.I_CONTIT",
    k_Nforma: linixUseCaseData.k_Funcio || "",
    // opcionesCsPorCasoDeUso: [
    //   {
    //     k_Opcion: linixUseCaseData.k_Opcion || "",
    //   },
    // ],
    // opcionesPortalWebPorCasoDeUso: [
    //   {
    //     k_Funcio: "string",
    //   },
    // ],
    // reportesWebPorCasoDeUso: [
    //   {
    //     k_Report: "string",
    //   },
    // ],
    // reportesCsPorCasoDeUso: [
    //   {
    //     k_Nforma: "string",
    //   },
    // ],

    // tiposDeDocumentoPorCasoDeUso: [{ k_Docume: "string" }],
  };
  let confirmationType = true;
  try {
    await editLinixUseCase(newLinixUseCase);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
