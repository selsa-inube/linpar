import { editLinixUseCase } from "@services/linixUseCase/editLinixUseCase";
import { IAssignmentFormEntry } from "../../users/types/forms.types";
import { UseCase } from "../types";
import { formSelectLabel } from "../config/dataUseCases.config";
import { IFormAddLinixUseCase } from "../adding-linix-use-case/types";

export const editLinixUseCases = async (
  linixUseCaseData: IFormAddLinixUseCase,
  optionsData?: IAssignmentFormEntry[],
  nameOption?: string
) => {
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
  const normalizeReportesCsPorCasoDeUso =
    nameOption === "clientServerReports"
      ? optionsData?.map((change: IAssignmentFormEntry) => {
          return {
            transactionOperation: change.isActive ? "Insert" : "Delete",
            k_Nforma: change.id,
          };
        })
      : [];
  const normalizeReportesWebPorCasoDeUso =
    nameOption === "webReports"
      ? optionsData?.map((change: IAssignmentFormEntry) => {
          return {
            transactionOperation: change.isActive ? "Insert" : "Delete",
            k_Report: change.id,
          };
        })
      : [];

  const newoptionsUseCase: UseCase = {
    modifyJustification: "edit",
    k_Usecase: linixUseCaseData.generalInformation.values.k_Usecase || "",
    n_Usecase: linixUseCaseData.generalInformation.values.n_Usecase,
    n_Descrip: linixUseCaseData.generalInformation.values.n_Descrip,
    a_Publicc: "<string>",
    i_Tipusec:
      formSelectLabel(linixUseCaseData.generalInformation.values.i_Tipusec) ||
      "",
    k_Ncampo: "CD387MCERTIDEP.I_CONTIT",
    k_Nforma: linixUseCaseData.generalInformation.values.k_Funcio || "",
    opcionesCsPorCasoDeUso: normalizeOpcionesCs,
    opcionesPortalWebPorCasoDeUso: normalizeOpcionesPortalWebPorCaso,
    reportesCsPorCasoDeUso: normalizeReportesCsPorCasoDeUso,
    reportesWebPorCasoDeUso: normalizeReportesWebPorCasoDeUso,
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
