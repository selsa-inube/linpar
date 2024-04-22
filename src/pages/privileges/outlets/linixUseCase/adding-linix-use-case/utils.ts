import localforage from "localforage";
import { UseCase } from "../types";
import { IFormAddLinixUseCase, IFormAddLinixUseCaseRef } from "./types";
import { stepsAddingLinixUseCase } from "./config/addingLinixUseCase.config";

export const saveLinixUseCase = (addLinixUseCase: IFormAddLinixUseCase) => {
  const {
    generalInformation: { values: generalInformation },
    clientServerButton: { values: clientServerButton },
    webOptions: { values: webOptions },
    webReports: { values: webReports },
    downloadableDocuments: { values: downloadableDocuments },
    clientServerReports: { values: clientServerReports },
    clientServerOptions: { values: clientServerOptions },
  } = addLinixUseCase;

  const normalizeReportsWeb = webReports
    .filter((webReport) => webReport.isActive === true)
    .map((webReport) => ({
      k_Funcio: webReport.value,
    }));

  const normalizeReportesCsPorCasoDeUso = clientServerReports
    .filter((clientServerReport) => clientServerReport.isActive === true)
    .map((clientServerReport) => ({
      k_Nforma: clientServerReport.value,
    }));

  const normalizeWebOptionsCsPorCasoDeUso = clientServerOptions
    .filter((clientServerOption) => clientServerOption.isActive === true)
    .map((clientServerOption) => ({
      k_Opcion: clientServerOption.value,
    }));

  const normalizeDocumentoPorCasoDeUso = downloadableDocuments
    .filter((downloadableDocument) => downloadableDocument.isActive === true)
    .map((downloadableDocument) => ({
      k_Docume: downloadableDocument.value,
    }));
  const normalizeWebOptions = webOptions.filter(
    (webOptions) => webOptions.isActive === true
  );

  const newLinixUseCase: UseCase = {
    id: "",
    k_Usecase: "",
    n_Usecase: generalInformation.n_Usecase,
    n_Descrip: generalInformation.n_Descrip,
    a_Publicc: "",
    i_Tipusec: generalInformation.i_Tipusec,
    k_Ncampo: clientServerButton.csButtonOption,
    k_Nforma: generalInformation.k_Opcion,
    opcionesPortalWebPorCasoDeUso: normalizeReportsWeb,
    reportesWebPorCasoDeUso: normalizeWebOptions,
    reportesCsPorCasoDeUso: normalizeReportesCsPorCasoDeUso,
    opcionesCsPorCasoDeUso: normalizeWebOptionsCsPorCasoDeUso,
    tiposDeDocumentoPorCasoDeUso: normalizeDocumentoPorCasoDeUso,
  };
  localforage.getItem("linix-use-cases").then((data) => {
    if (data) {
      localforage.setItem("linix-use-cases", [
        ...(data as UseCase[]),
        newLinixUseCase,
      ]);
    } else {
      localforage.setItem("linix-use-cases", [newLinixUseCase]);
    }
  });
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
