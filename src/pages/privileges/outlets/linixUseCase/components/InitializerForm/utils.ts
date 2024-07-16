import { editLinixUseCase } from "@src/services/linixUseCase/editLinixUseCase";
import { IAssignmentFormEntry } from "../../../users/types/forms.types";
import { UseCase } from "../../types";
import { formSelectLabel } from "../../config/dataUseCases.config";

export const editLinixUseCases = async (
  linixUseCaseData: UseCase,
  optionsData?: IAssignmentFormEntry[],
  id?: string,
  nameOption?: string
) => {
  console.log("linixUseCaseData", linixUseCaseData);
  const normalizeOpcionesCs =
    nameOption === "clientServerOptions"
      ? optionsData?.map((change: IAssignmentFormEntry) => {
          return {
            transactionOperation: change.isActive ? "Insert" : "Delete",
            k_Opcion: change.id,
          };
        })
      : [];
  const normalizeOpcionesPortalWebPorCaso =
    nameOption === "webOptions"
      ? optionsData?.map((change: IAssignmentFormEntry) => {
          return {
            transactionOperation: change.isActive ? "Insert" : "Delete",
            k_Funcio: change.id,
          };
        })
      : [];

  const newoptionsUseCase: UseCase = {
    modifyJustification: "edit",
    k_Usecase: linixUseCaseData.k_Usecase,
    n_Usecase: linixUseCaseData.n_Usecase,
    n_Descrip: linixUseCaseData.n_Descrip,
    a_Publicc: "<string>",
    i_Tipusec: formSelectLabel(linixUseCaseData.i_Tipusec) || "",
    k_Ncampo: "CD387MCERTIDEP.I_CONTIT",
    k_Nforma: linixUseCaseData.k_Funcio || "",
    opcionesCsPorCasoDeUso: normalizeOpcionesCs,
    opcionesPortalWebPorCasoDeUso: normalizeOpcionesPortalWebPorCaso,
    //   //   reportesCsPorCasoDeUso?:
    //   //   reportesWebPorCasoDeUso?:
    //   //   tiposDeDocumentoPorCasoDeUso?:
  };
  let confirmationType = true;

  try {
    await editLinixUseCase(newoptionsUseCase);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
