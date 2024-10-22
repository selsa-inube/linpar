import { editLinixUseCase } from "@services/linixUseCase/editLinixUseCase";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import {
  OpcionesCsPorCasoDeUso,
  OpcionesPortalWebPorCasoDeUso,
  ReportesCsPorCasoDeUso,
  ReportesWebPorCasoDeUso,
  UseCase,
} from "../types";
import { formSelectLabel } from "../config/dataUseCases.config";
import { IFormAddLinixUseCase } from "../adding-linix-use-case/types";

export const editLinixUseCases = async (
  linixUseCaseData: IFormAddLinixUseCase,
  businessUnit: string,
  optionsData?: IAssignmentFormEntry[]
) => {
  const normalizeOpcionesCs =
    linixUseCaseData.clientServerOptions.values?.flatMap(
      (data: IAssignmentFormEntry) => {
        return optionsData
          ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
          .map((j: IAssignmentFormEntry) => ({
            transactionOperation: j.isActive ? "Insert" : "Delete",
            k_Opcion: j.id,
          })) as OpcionesCsPorCasoDeUso[];
      }
    );

  const normalizeOpcionesPortalWebPorCaso =
    linixUseCaseData.webOptions.values?.flatMap(
      (data: IAssignmentFormEntry) => {
        return optionsData
          ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
          .map((j: IAssignmentFormEntry) => ({
            transactionOperation: j.isActive ? "Insert" : "Delete",
            k_Funcio: j.id,
          })) as OpcionesPortalWebPorCasoDeUso[];
      }
    );
  const normalizeReportesCsPorCasoDeUso =
    linixUseCaseData.clientServerReports.values?.flatMap(
      (data: IAssignmentFormEntry) => {
        return optionsData
          ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
          .map((j: IAssignmentFormEntry) => ({
            transactionOperation: j.isActive ? "Insert" : "Delete",
            k_Nforma: j.id,
          })) as ReportesCsPorCasoDeUso[];
      }
    );
  const normalizeReportesWebPorCasoDeUso =
    linixUseCaseData.webReports.values?.flatMap(
      (data: IAssignmentFormEntry) => {
        return optionsData
          ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
          .map((j: IAssignmentFormEntry) => ({
            transactionOperation: j.isActive ? "Insert" : "Delete",
            k_Report: j.id,
          })) as ReportesWebPorCasoDeUso[];
      }
    );

  const newoptionsUseCase: UseCase = {
    modifyJustification: "edit",
    k_Usecase: linixUseCaseData.generalInformation.values.k_Usecase || "",
    n_Usecase: linixUseCaseData.generalInformation.values.n_Usecase,
    n_Descrip: linixUseCaseData.generalInformation.values.n_Descrip,
    a_Publicc: "<string>",
    i_Tipusec:
      formSelectLabel(linixUseCaseData.generalInformation.values.i_Tipusec) ||
      "",
    k_Ncampo: linixUseCaseData.clientServerButton.values.k_option_button,
    k_Nforma: linixUseCaseData.generalInformation.values.k_Funcio || "",
    opcionesCsPorCasoDeUso: normalizeOpcionesCs || [],
    opcionesPortalWebPorCasoDeUso: normalizeOpcionesPortalWebPorCaso,
    reportesCsPorCasoDeUso: normalizeReportesCsPorCasoDeUso,
    reportesWebPorCasoDeUso: normalizeReportesWebPorCasoDeUso,
  };
  let confirmationType = true;

  try {
    await editLinixUseCase(newoptionsUseCase, businessUnit);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
