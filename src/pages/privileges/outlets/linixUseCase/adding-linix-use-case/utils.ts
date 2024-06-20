import { UseCase } from "../types";
import { IFormAddLinixUseCase, IFormAddLinixUseCaseRef } from "./types";
import { stepsAddingLinixUseCase } from "./config/addingLinixUseCase.config";
import { addLinixUseCase } from "@src/services/linixUseCase/postLinixUseCase";

export const saveLinixUseCase = async (
  linixUseCaseData: IFormAddLinixUseCase
) => {
  const {
    generalInformation: { values: generalInformation },
    clientServerButton: { values: clientServerButton },
    webOptions: { values: webOptions },
    webReports: { values: webReports },
    downloadableDocuments: { values: downloadableDocuments },
    clientServerReports: { values: clientServerReports },
    clientServerOptions: { values: clientServerOptions },
  } = linixUseCaseData;

  const normalizeReportsWeb = webReports
    .filter((webReport) => webReport.isActive === true)
    .map((webReport) => ({
      k_Funcio: webReport.id,
      k_Usecase: webReport.value,
    }));

  const normalizeReportesCsPorCasoDeUso = clientServerReports
    .filter((clientServerReport) => clientServerReport.isActive === true)
    .map((clientServerReport) => ({
      k_Nforma: clientServerReport.id,
      k_Usecase: clientServerReport.value,
    }));

  const normalizeWebOptionsCsPorCasoDeUso = clientServerOptions
    .filter((clientServerOption) => clientServerOption.isActive === true)
    .map((clientServerOption) => ({
      k_Opcion: clientServerOption.id,
      k_Usecase: clientServerOption.value,
    }));

  const normalizeDocumentoPorCasoDeUso = downloadableDocuments
    .filter((downloadableDocument) => downloadableDocument.isActive === true)
    .map((downloadableDocument) => ({
      k_Docume: downloadableDocument.id,
      k_Usecase: downloadableDocument.value,
    }));

  const normalizeWebOptions = webOptions
    .filter((webOptions) => webOptions.isActive === true)
    .map((webOptions) => ({
      k_Report: webOptions.id,
      k_Usecase: webOptions.value,
    }));

  const newLinixUseCase: UseCase = {
    k_Usecase: generalInformation.n_Descrip,
    n_Usecase: generalInformation.n_Usecase,
    n_Descrip: generalInformation.n_Descrip,
    a_Publicc: "",
    i_Tipusec: generalInformation.i_Tipusec,
    k_Ncampo: clientServerButton.csButtonOption,
    k_Nforma: generalInformation.k_Funcio,
    opcionesPortalWebPorCasoDeUso: normalizeReportsWeb,
    reportesWebPorCasoDeUso: normalizeWebOptions,
    reportesCsPorCasoDeUso: normalizeReportesCsPorCasoDeUso,
    opcionesCsPorCasoDeUso: normalizeWebOptionsCsPorCasoDeUso,
    tiposDeDocumentoPorCasoDeUso: normalizeDocumentoPorCasoDeUso,
  };
  let confirmationType = true;

  try {
    await addLinixUseCase(newLinixUseCase);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};

const addLinixUseCaseStepsRules = (
  currentStep: number,
  currentDataAddUseCaseLinixForm: IFormAddLinixUseCase,
  formReferences: IFormAddLinixUseCaseRef,
  isCurrentFormValid: boolean
) => {
  let newDataAddUseCaseLinixForm = {
    ...currentDataAddUseCaseLinixForm,
  };

  const stepKey = Object.entries(stepsAddingLinixUseCase).find(
    ([, config]) => config.id === currentStep
  )?.[0];

  if (!stepKey) return currentDataAddUseCaseLinixForm;

  const values =
    formReferences[stepKey as keyof IFormAddLinixUseCase]?.current?.values;

  return (newDataAddUseCaseLinixForm = {
    ...newDataAddUseCaseLinixForm,
    [stepKey]: { isValid: isCurrentFormValid, values },
  });
};

export { addLinixUseCaseStepsRules };
