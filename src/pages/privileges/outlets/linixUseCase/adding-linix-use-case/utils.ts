import { UseCase } from "../types";
import { IFormAddLinixUseCase, IFormAddLinixUseCaseRef } from "./types";
import { stepsAddingLinixUseCase } from "./config/addingLinixUseCase.config";
import { addLinixUseCase } from "@src/services/linixUseCase/postLinixUseCase";
import { formSelectLabel } from "../config/dataUseCases.config";

export const saveLinixUseCase = async (
  linixUseCaseData: IFormAddLinixUseCase
) => {
  const {
    generalInformation: { values: generalInformation },
    clientServerButton: { values: clientServerButton },
    webOptions: { values: webOptions },
    webReports: { values: webReports },
    // downloadableDocuments: { values: downloadableDocuments },
    clientServerReports: { values: clientServerReports },
    clientServerOptions: { values: clientServerOptions },
  } = linixUseCaseData;

  const normalizeReportsWeb = webOptions
    .filter((webOptions) => webOptions.isActive === true)
    .map((webOptions) => ({
      k_Funcio: webOptions.id,
    }));

  const normalizeWebOptions = webReports
    .filter((webReports) => webReports.isActive === true)
    .map((webReports) => ({
      k_Report: webReports.id,
    }));

  const normalizeReportesCsPorCasoDeUso = clientServerReports
    .filter((clientServerReport) => clientServerReport.isActive === true)
    .map((clientServerReport) => ({
      k_Nforma: clientServerReport.id,
    }));

  const normalizeWebOptionsCsPorCasoDeUso = clientServerOptions
    .filter((clientServerOption) => clientServerOption.isActive === true)
    .map((clientServerOption) => ({
      k_Opcion: clientServerOption.id,
    }));

  // const normalizeDocumentoPorCasoDeUso = downloadableDocuments
  //   .filter((downloadableDocument) => downloadableDocument.isActive === true)
  //   .map((downloadableDocument) => ({
  //     k_Docume: downloadableDocument.id,
  //   }));

  // const normalizeWebOptions = webOptions
  //   .filter((webOptions) => webOptions.isActive === true)
  //   .map((webOptions) => ({
  //     k_Report: webOptions.id,
  //   }));

  const newLinixUseCase: UseCase = {
    k_Usecase: "2",
    n_Usecase: generalInformation.n_Usecase,
    n_Descrip: generalInformation.n_Descrip,
    a_Publicc: "a",
    i_Tipusec: formSelectLabel(generalInformation.i_Tipusec) || "",
    k_Ncampo: clientServerButton.csButtonOption,
    k_Nforma: generalInformation.k_Funcio,
    opcionesPortalWebPorCasoDeUso: normalizeReportsWeb,
    reportesWebPorCasoDeUso: normalizeWebOptions,
    reportesCsPorCasoDeUso: normalizeReportesCsPorCasoDeUso,
    opcionesCsPorCasoDeUso: normalizeWebOptionsCsPorCasoDeUso,
    tiposDeDocumentoPorCasoDeUso: [{ k_Docume: "string" }],
  };
  let confirmationType = true;
  console.log(newLinixUseCase);
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
